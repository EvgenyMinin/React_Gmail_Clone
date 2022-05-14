import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { FC, useEffect } from "react";
import dayjs from "dayjs";

import { db } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Sections, SettingsLeft, SettingsRight } from '../../../features';
import { EmailRow } from '../../../shared';
import { emailListSelector, setEmailList } from '..';

import styles from "./styles.module.css";

export const EmailList: FC = () => {
    const emailsCollectionRef = collection(db, "emails");
    const dispatch = useAppDispatch();
    const { emailList } = useAppSelector(emailListSelector);
    const q = query(emailsCollectionRef, orderBy("timeStamp", "desc"));

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch(setEmailList(data));
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <SettingsLeft />

                <SettingsRight />
            </div>

            <Sections />

            <div className={styles.emailList}>
                {emailList.map(({ id, to, subject, message, timeStamp }) => {
                    const mailDate = new Date(timeStamp?.seconds * 1000);
                    const prevDays = dayjs().diff(dayjs(mailDate), "d");
                    const date = prevDays >= 1 ? dayjs(mailDate).format("DD.MM.YYYY") : dayjs(mailDate).format("HH:mm");

                    return <EmailRow key={id} title={to} subject={subject} description={message} date={date} />;
                })}
            </div>
        </div>
    );
};
