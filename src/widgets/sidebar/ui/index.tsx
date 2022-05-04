import { FC } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import DuoIcon from "@mui/icons-material/Duo";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SidebarOption } from "../../../shared";
import { messageIsOpenSelector, openSendMessage } from "..";

import styles from "./style.module.css";

export const Sidebar: FC = () => {
    const dispatch = useAppDispatch();
    const isOpenMessageModal = useAppSelector(messageIsOpenSelector);
    const composeHandler = () => {
        !isOpenMessageModal && dispatch(openSendMessage());
    };

    return (
        <div className={styles.sidebar}>
            <Button onClick={composeHandler} startIcon={<AddIcon fontSize="large" />} className={styles.compose}>
                COMPOSE
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
            <SidebarOption Icon={StarIcon} title="Starred" number={0} />
            <SidebarOption Icon={AccessTimeFilledIcon} title="Snoozed" number={0} />
            <SidebarOption Icon={SendIcon} title="Sent" number={0} />
            <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={0} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={0} />

            <div className={styles.footer}>
                <div className={styles.footerIcon}>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
