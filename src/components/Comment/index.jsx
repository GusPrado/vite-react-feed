import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/gusprado.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gus Prado</strong>
              <time title='23 de Junho 20:40' dateTime='2022-06-23 20:40:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Remover comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
