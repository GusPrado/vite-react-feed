import { Header } from './components/Header';

import styles from './app.module.css';
import './styles/global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>posts</main>
      </div>
    </>
  );
}

export default App;
