import { FC } from "react";
import { Checkbox, IconButton } from "@mui/material";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export const SettingsLeft: FC = () => {
    return (
        <div>
            <Checkbox />

            <IconButton>
                <ArrowDropDownOutlinedIcon />
            </IconButton>

            <IconButton>
                <RedoOutlinedIcon />
            </IconButton>

            <IconButton>
                <MoreVertOutlinedIcon />
            </IconButton>
        </div>
    );
};
