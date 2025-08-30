import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/app/components/Avatar/Avatar';
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
                <Avatar
                    hasBorder={true}
                    src="/avatar005.jpg"
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