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
              author="Diego Fernandes"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam."
            />
            <Post
              author="Gabriel Buzzi"
              content="Um novo post muito legal"
            />
          </main>
      </div>
    </>
  );
};

export default Home;