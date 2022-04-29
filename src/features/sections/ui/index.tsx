import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { Section } from "../../../shared";

import styles from "./styles.module.css";

export const Sections = () => {
    return (
        <div className={styles.sections}>
            <Section Icon={InboxIcon} title="Primary" color="red" selected />
            <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
            <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
        </div>
    );
};
