import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import { useAppSelector } from "../../../app/hooks";
import { selectedMailSelector } from "../../../widgets";

import styles from "./styles.module.css";

export const MailBody = () => {
    const {
        mail: { title, subject, description, date },
    } = useAppSelector(selectedMailSelector);

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h2>{subject}</h2>

                <LabelImportantIcon className={styles.icon} />
                <p>{title}</p>
                <p className={styles.time}>{date}</p>
            </div>

            <div className={styles.message}>
                <p>{description}</p>
            </div>
        </div>
    );
};
