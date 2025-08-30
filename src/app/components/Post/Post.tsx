import Image from 'next/image';
import styles from './Post.module.css';
import Link from 'next/link';

interface PostProps {
    author: string;
    content: string;
}

function Post({ author, content }: PostProps) {
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
                        <strong>{author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:34' dateTime='2022-05-11 08:34:18'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>{content}</p>
            </div>
        </article>
    );
};

export default Post;