import React, {FC} from "react";
import style from "./MenuItemFragment.module.scss"
import {MenuItem} from "@material-ui/core";
import {MenuItemFragmentProps} from "./MenuItemFragment.types";

export const MenuItemFragment: FC<MenuItemFragmentProps> = (props) => {
    const {exitEditMode, menuItem} = props;
    const {icon, onClickFunc, text} = menuItem;
    const handleClick = () => {
        onClickFunc();
        exitEditMode();
    };

    return <React.Fragment>
        <MenuItem onClick={handleClick} className={style.MenuItemFragment}>
            <div className={style.iconWrapper}>{icon}</div>
             <div className={style.textWrapper}>{text}</div>
        </MenuItem>
    </React.Fragment>
};