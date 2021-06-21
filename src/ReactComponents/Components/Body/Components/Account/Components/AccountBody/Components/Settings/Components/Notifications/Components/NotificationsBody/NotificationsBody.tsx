import React, {FC} from "react";
import style from "./NotificationsBody.module.scss"
import {NotificationsBodyProps} from "./NotificationsBody.types";
import {useNotificationsDataMap} from "./NotificationsBody.hooks";

export const NotificationsBody: FC<NotificationsBodyProps> = (props) => {
    const {notificationsData} = props;
    const notifications = useNotificationsDataMap(notificationsData);

    return <div className={style.NotificationsBody}>
        {notifications}
    </div>
};

