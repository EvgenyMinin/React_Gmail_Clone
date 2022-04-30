import { FC } from "react";

import { Sections, SettingsLeft, SettingsRight } from "../../features";
import { EmailRow } from "../../shared";

import styles from "./styles.module.css";

export const EmailList: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <SettingsLeft />

                <SettingsRight />
            </div>

            <Sections />

            <div className={styles.emailList}>
                <EmailRow id="1" title="Friends" subject="The End" description="The best series ever" date="30.04.2022" />
            </div>
        </div>
    );
};
