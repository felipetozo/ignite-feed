import styles from './Header.module.css';
import Image from 'next/image';

function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/ignite-feed-logo.svg"
                width={64}
                height={60}
                alt="Ignite Feed"
            />
            <strong>Ignite Feed</strong>
        </header>
    );
};

export default Header;