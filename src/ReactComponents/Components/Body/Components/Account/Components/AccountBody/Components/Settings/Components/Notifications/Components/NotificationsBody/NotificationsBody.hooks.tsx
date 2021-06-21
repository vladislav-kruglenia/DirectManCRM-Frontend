import {NotificationData} from "./NotificationsBody.types";
import {Notification} from "../Notification/Notification";
import React from "react";

export const useNotificationsDataMap = (notificationsData: NotificationData[]) => {
    return notificationsData.map((item: NotificationData, index) => {
        const {notificationId, notificationText, notificationTitle, notificationDate} = item;
        return (
            <Notification
                key={notificationId}
                notificationTitle={notificationTitle}
                notificationText={notificationText}
                notificationDate={notificationDate}
                isNotDivider={index === 0}
            />
        )
    });
};