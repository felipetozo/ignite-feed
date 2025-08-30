import styles from './Avatar.module.css';
import Image from 'next/image';

function Avatar(props: { src: string, hasBorder: boolean; }) {
    return (
        <Image
            src={props.src}
            width={160}
            height={160}
            alt='Profile Avatar'
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar }
        />
    );
};

export default Avatar;