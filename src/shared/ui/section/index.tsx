import { FC } from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import cn from "classnames";

import styles from "./styles.module.css";

type OwnProps = {
    Icon: OverridableComponent<SvgIconTypeMap>;
    title: string;
    color: string;
    selected?: boolean;
};

export const Section: FC<OwnProps> = ({ Icon, title, color, selected }) => {
    return (
        <div className={cn(styles.section, { [styles.selected]: selected })} style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}` }}>
            <Icon />
            <h4>{title}</h4>
        </div>
    );
};
