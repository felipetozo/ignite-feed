import styles from './Avatar.module.css';
import Image from 'next/image';

function Avatar(props: { src: string, hasBorder: any; }) {
    return (
        <Image
            src={props.src}
            width={60}
            height={60}
            alt='Profile Avatar'
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar }
        />
    );
};

export default Avatar;