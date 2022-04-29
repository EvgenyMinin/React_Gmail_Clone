import { FC } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const SettingsRight: FC = () => {
    return (
        <div>
            <IconButton>
                <ChevronLeftOutlinedIcon />
            </IconButton>

            <IconButton>
                <ChevronRightOutlinedIcon />
            </IconButton>

            <IconButton>
                <KeyboardAltOutlinedIcon />
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
        </div>
    );
};
