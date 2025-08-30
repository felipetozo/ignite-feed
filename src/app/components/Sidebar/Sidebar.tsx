import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { LiaUserEditSolid } from "react-icons/lia";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image
                src="/pattern.jpg"
                width={800}
                height={300}
                alt="Ignite Feed"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Image
                    src="/avatar005.jpg"
                    width={120}
                    height={120}
                    alt="Profile Picture"
                    className={styles.profilePicture}
                />
                <p>
                    <strong>Shakira O&#39;Neall</strong>
                    <span>Web Developer</span>
                </p>
            </div>

            <footer>
                <Link href="/">
                    <LiaUserEditSolid />
                    Editar seu perfil
                </Link>
            </footer>
        </aside>
    );
};

export default Sidebar;