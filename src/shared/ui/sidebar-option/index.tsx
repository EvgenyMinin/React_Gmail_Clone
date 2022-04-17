import { FC } from "react";
import cn from "classnames";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import styles from "./style.module.css";

type OwnProps = {
    Icon: OverridableComponent<SvgIconTypeMap>;
    title: string;
    number: number;
    selected?: boolean;
};

export const SidebarOption: FC<OwnProps> = ({ Icon, title, number, selected }) => {
    return (
        <div className={cn(styles.sidebarOption, { [styles.selected]: selected, [styles.number]: number })}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};
