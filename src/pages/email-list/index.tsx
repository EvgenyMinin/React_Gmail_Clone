import { FC } from "react";

import { Sections, SettingsLeft, SettingsRight } from "../../features";

import styles from "./styles.module.css";

export const EmailList: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <SettingsLeft />

                <SettingsRight />
            </div>

            <Sections />
        </div>
    );
};
