import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import styles from "./styles.module.css";

export const MailToolsRight = () => {
    return (
        <div className={styles.toolsRight}>
            <IconButton>
                <UnfoldMoreIcon />
            </IconButton>

            <IconButton>
                <PrintIcon />
            </IconButton>

            <IconButton>
                <ExitToAppIcon />
            </IconButton>
        </div>
    );
};
