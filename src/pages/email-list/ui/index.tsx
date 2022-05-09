import { collection, getDocs } from "firebase/firestore";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";

import { Sections, SettingsLeft, SettingsRight } from "../../../features";
import { db } from "../../../firebase";
import { EmailRow } from "../../../shared";
import { emailListSliceActions } from "../model/slice";

import styles from "./styles.module.css";

export const EmailList: FC = () => {
    const emailsCollectionRef = collection(db, "emails");
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const res = await getDocs(emailsCollectionRef);
            const data = res.docs.map((doc) => ({ ...doc.data() }));
            dispatch(emailListSliceActions.setEmailList(data));
        })();
    }, [emailsCollectionRef, dispatch]);

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
