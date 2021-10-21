import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="logo" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus ab, id incidunt distinctio, alias cupiditate illo consequuntur iusto perspiciatis
                        sed vel odio ad accusantium doloremque molestias, culpa sint dolore.
                    </p>
                    <div className={styles.messageUser}></div>
                </li>
            </ul>
        </div>
    )
}