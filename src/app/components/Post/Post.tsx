import Image from 'next/image';
import styles from './Post.module.css';
import Link from 'next/link';
import { LiaCommentMedicalSolid } from "react-icons/lia";
import Comment from '../Comment/Comment';


function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Image
                        src="/avatar001.jpg"
                        width={120}
                        height={120}
                        alt="Author Profile"
                        className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:34' dateTime='2022-05-11 08:34:18'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <Link href="/">jane.design/doctorcare</Link></p>
                <p>#novoprojeto #nlw #rocketseat</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">
                        <LiaCommentMedicalSolid />
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};

export default Post;