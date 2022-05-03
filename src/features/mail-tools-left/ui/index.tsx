import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";

export const MailToolsLeft = () => {
    const history = useHistory();

    return (
        <div className={styles.toolsLeft}>
            <IconButton onClick={() => history.push("/")}>
                <ArrowBackIcon />
            </IconButton>

            <IconButton>
                <MoveToInboxIcon />
            </IconButton>

            <IconButton>
                <ReportIcon />
            </IconButton>

            <IconButton>
                <DeleteIcon />
            </IconButton>

            <IconButton>
                <EmailIcon />
            </IconButton>

            <IconButton>
                <WatchLaterIcon />
            </IconButton>

            <IconButton>
                <CheckCircleIcon />
            </IconButton>

            <IconButton>
                <LabelImportantIcon />
            </IconButton>

            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
    );
};
