import { FC } from "react";
import { Checkbox, IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import { useAppDispatch } from "../../../app/hooks";
import { SelectedEmail } from "../..";
import { setMail } from "../../../widgets";

import styles from "./styles.module.css";

export const EmailRow: FC<SelectedEmail> = ({ title, subject, description, date }) => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const goToEmailDetail = () => {
        dispatch(setMail({ title, subject, description, date }));
        history.push("/mail");
    };

    return (
        <div className={styles.emailRow} onClick={goToEmailDetail}>
            <div className={styles.options}>
                <Checkbox />

                <IconButton>
                    <StarBorderIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.message}>
                <h4>
                    {subject}&nbsp;
                    <span className={styles.description}>-&nbsp;{description}</span>
                </h4>
            </div>
            <p className={styles.date}>{date}</p>
        </div>
    );
};
