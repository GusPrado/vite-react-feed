import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
      />

      <div className={styles.profile}>
        <strong>Gus Prado</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href='#'>Editar seu perfil</a>
      </footer>
    </aside>
  );
}
