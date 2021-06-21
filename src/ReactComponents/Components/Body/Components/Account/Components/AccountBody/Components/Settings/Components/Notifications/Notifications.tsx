import React from "react";
import style from "./Notifications.module.scss"
import {Divider, Paper} from "@material-ui/core";
import {NotificationsTitle} from "./Components/NotificationsTitle/NotificationsTitle";
import {NotificationsBody} from "./Components/NotificationsBody/NotificationsBody";
import {notificationData} from "./Notifications.data";

export const Notifications = () => {
    return <Paper className={style.Notifications}>
        <NotificationsTitle/>
        <Divider className={style.divider}/>
        <NotificationsBody notificationsData={notificationData}/>
    </Paper>
};



