import { FC } from 'react';

import { MailBody, MailToolsLeft, MailToolsRight } from '../../../features';

import styles from "./styles.module.css";

export const SelectedMail: FC = () => (
    <div className={styles.mail}>
        <div className={styles.mailTools}>
            <MailToolsLeft />

            <MailToolsRight />
        </div>

        <MailBody />
    </div>
);
