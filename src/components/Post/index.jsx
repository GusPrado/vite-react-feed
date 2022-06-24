import styles from './post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/gusprado.png'
          />
          <div className={styles.authorInfo}>
            <strong>Gus Prado</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='23 de Junho 20:40' dateTime='2022-06-23 20:40:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋 </p>
          <p>Acabei de subir mais um projeto no meu portifa. É um</p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀
          <p>
            <a href='#'>👉 jane.design/doctorcare</a>
          </p>
          <p>
            <a href='#'>#novoprojeto #nlw #rocketseat</a>
          </p>
        </p>
      </div>
    </article>
  );
}