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
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  };

  const handleInvalidNewComment = () => {
    event.target.setCustomValidity('Campo obrigatório!');
  };

  const handleDeleteComment = (commentToDelete) => {
    const updatedComments = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(updatedComments);
  };

  const isNewCommentEmpty = newComment.length === 0;

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
      </div>

      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixei o seu comentário</strong>

        <textarea
          value={newComment}
          placeholder='Deixe um comentário'
          onInvalid={handleInvalidNewComment}
          onChange={handleNewCommentText}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
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
