import React from "react";
import style from "./Settings.module.scss";
import {UserProfileData} from "./Components/UserProfileData/UserProfileData";
import {ChangePassword} from "./Components/ChangePassword/ChangePassword";

export let Settings = () => {
    return <div className={style.Settings}>
        <UserProfileData/>
        <ChangePassword/>
    </div>
};
