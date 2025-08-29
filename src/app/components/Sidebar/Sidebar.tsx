import styles from './Sidebar.module.css';
import Image from 'next/image';
import { LiaUserEditSolid } from "react-icons/lia";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image
                src="/pattern.jpg"
                width={800}
                height={300}
                alt="Ignite Feed"
            />

            <div className={styles.profile}>
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="/">
                <LiaUserEditSolid />
                Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};

export default Sidebar;