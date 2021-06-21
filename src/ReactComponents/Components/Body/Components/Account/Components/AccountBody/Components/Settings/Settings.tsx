import React from "react";
import style from "./Settings.module.scss";
import {UserProfileData} from "./Components/UserProfileData/UserProfileData";
import {ChangePassword} from "./Components/ChangePassword/ChangePassword";
import {Notifications} from "./Components/Notifications/Notifications";

export const Settings = () => {
    return <div className={style.Settings}>
        <div className={style.userDataContainer}>
            <UserProfileData/>
            <ChangePassword/>
        </div>
        <div className={style.notificationsContainer}>
            <Notifications/>
        </div>
    </div>
};

