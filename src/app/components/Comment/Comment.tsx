import { TiTrash } from 'react-icons/ti';
import styles from './Comment.module.css';
import Image from 'next/image';
import { LiaThumbsUp } from 'react-icons/lia';

function Comment() {
    return (
        <div className={styles.comment}>
            <Image
                src="/avatar002.jpg"
                alt="Ignite Feed Avatar 03"
                width={32}
                height={32}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='11 de maio às 08:34' dateTime='2022-05-11 08:34:18'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deleter comentário">
                            <TiTrash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <LiaThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Comment;