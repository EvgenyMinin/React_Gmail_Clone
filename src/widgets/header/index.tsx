import { FC } from 'react';

import { Avatar, IconButton, Input } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styles from "./style.module.css";

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmail_logo" />
            </div>

            <div className={styles.header__middle}>
                <SearchIcon className={styles.icon} />

                <Input placeholder="Search mail" className={styles.input} />

                <ArrowDropDownIcon className={styles.icon} />
            </div>

            <div className={styles.header__right}>
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar />
            </div>
        </div>
    );
};
