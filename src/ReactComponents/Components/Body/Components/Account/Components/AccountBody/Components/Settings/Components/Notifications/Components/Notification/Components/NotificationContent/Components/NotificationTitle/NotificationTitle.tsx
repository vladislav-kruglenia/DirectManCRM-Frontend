import React, {FC} from "react";
import style from "./NotificationTitle.module.scss"
import {NotificationTitleProps} from "./NotificationTitle.types";
import {Typography} from "@material-ui/core";

export const NotificationTitle:FC<NotificationTitleProps> = (props) => {
    const {notificationTitle} = props;

    return <Typography className={style.NotificationTitle}>{notificationTitle}</Typography>
};