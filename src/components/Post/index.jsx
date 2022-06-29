import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Nice post!!']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateDistanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleAddNewComment = () => {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleNewCommentText = () => {
    setNewComment(event.target.value);
  };

  const handleDeleteComment = (commentToDelete) => {
    const updatedComments = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(updatedComments);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateDistanceToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line === 'link') {
            return (
              <p key={line.content}>
                <a href='#'>{line.content}</a>
              </p>
            );
          }
        })}
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixei o seu comentário</strong>

        <textarea
          value={newComment}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentText}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
