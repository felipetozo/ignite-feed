import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Post from '@/app/components/Post/Post';
import styles from './page.module.css';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
            />
            <Post
            />
          </main>
      </div>
    </>
  );
};

export default Home;