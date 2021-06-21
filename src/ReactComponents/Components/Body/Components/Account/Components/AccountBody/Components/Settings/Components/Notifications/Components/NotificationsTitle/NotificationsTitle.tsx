import React from "react";
import style from "./NotificationsTitle.module.scss"
import {Typography} from "@material-ui/core";

export const NotificationsTitle = () => {
    return <div className={style.NotificationsTitle}>
        <Typography className={style.titleText}>Уведомления</Typography>
    </div>
};