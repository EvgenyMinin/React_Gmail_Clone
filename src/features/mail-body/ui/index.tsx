import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import styles from "./styles.module.css";

export const MailBody = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h2>Subject</h2>

                <LabelImportantIcon className={styles.icon} />
                <p>Title</p>
                <p className={styles.time}>10pm</p>
            </div>

            <div className={styles.message}>
                <p>Message</p>
            </div>
        </div>
    );
};
