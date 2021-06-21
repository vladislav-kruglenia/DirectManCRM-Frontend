import React, {FC} from "react";
import style from "./NotificationContent.module.scss"
import {NotificationTitle} from "./Components/NotificationTitle/NotificationTitle";
import {NotificationContentBody} from "./Components/NotificationContentBody/NotificationContentBody";
import {NotificationContentProps} from "./NotificationContent.types";
import {NotificationDate} from "./Components/NotificationDate/NotificationDate";

export const NotificationContent:FC<NotificationContentProps> = (props) => {
    const {notificationText, notificationTitle, notificationDate} = props;

    return <div className={style.NotificationContent}>
        <NotificationTitle notificationTitle={notificationTitle}/>
        <NotificationContentBody notificationText={notificationText}/>
        <NotificationDate dateNotification={notificationDate}/>
    </div>
};





