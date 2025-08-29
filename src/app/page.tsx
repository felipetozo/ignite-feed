import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import styles from './page.module.css';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            Main
          </main>
      </div>
    </>
  );
};

export default Home;