import React, {FC} from "react";
import style from "./PopUpWindow.module.scss"
import {PopUpWindowProps} from "./PopUpWindow.types";
import {Divider, Paper, Typography} from "@material-ui/core";
import {ClearButton} from "../MaterialUI/MaterialButtons/MaterialButtons";

export const PopUpWindow: FC<PopUpWindowProps> = (props) => {
    const {isOpen, setOpenMode, title, PopUpComponent} = props;

    if (!isOpen) return null;

    return <Paper className={style.PopUpWindow} elevation={5}>
        <div className={style.popUpWindowBody}>
            <Typography className={style.title}>{title}</Typography>
            <Divider/>
            {PopUpComponent}
            <div className={style.clearButtonContainer}>
                <ClearButton size={"small"} iconSize={"small"} onClickFunc={() => setOpenMode(false)}/>
            </div>
        </div>
        <div className={style.exitOpenModeLayer} onClick={() => setOpenMode(false)}>{}</div>
    </Paper>
};

