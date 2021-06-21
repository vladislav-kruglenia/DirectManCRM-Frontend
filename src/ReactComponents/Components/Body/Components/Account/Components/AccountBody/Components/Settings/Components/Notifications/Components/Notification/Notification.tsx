import React, {FC} from "react";
import style from "./Notification.module.scss"
import {UserLogo} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/UserLogo/UserLogo";
import {UserLogoVariant} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/UserLogo/UserLogo.types";
import {Divider} from "@material-ui/core";
import {NotificationProps} from "./Notification.types";
import {NotificationContent} from "./Components/NotificationContent/NotificationContent";

export const Notification:FC<NotificationProps> = (props) => {
    const {isNotDivider, notificationText, notificationTitle, notificationDate} = props;
    const DividerComponent = !isNotDivider && <Divider/>;

    return <div className={style.Notification}>
        {DividerComponent}
        <div className={style.notificationContainer}>
            <UserLogo variant={UserLogoVariant.small}/>
            <NotificationContent
                notificationTitle={notificationTitle}
                notificationText={notificationText}
                notificationDate={notificationDate}
            />
        </div>
    </div>
};

