import React, {FC} from "react";
import style from "./SendInstructionTitle.module.scss"
import {Typography} from "@material-ui/core";
import {SendInstructionTitleProps} from "./SendInstructionTitle.types";

export const SendInstructionTitle:FC<SendInstructionTitleProps> = (props) => {
    const {titleText, titleIcon} = props;

    return <div className={style.SendInstructionTitle}>
        <div className={style.titleIcon}>{titleIcon}</div>
        <Typography className={style.titleText} component={'div'}>{titleText}</Typography>
    </div>
};