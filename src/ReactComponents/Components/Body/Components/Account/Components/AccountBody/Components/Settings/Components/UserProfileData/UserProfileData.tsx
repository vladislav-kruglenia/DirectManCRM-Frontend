import React from "react";
import style from "./UserProfileData.module.scss"
import {Divider, Paper, Typography} from "@material-ui/core";
import {ProfileDataWrapper} from "./Components/ProfileDataWrapper/ProfileDataWrapper";
import {MainUserProfileData} from "./UserProfileData.types";

export const UserProfileData = () => {
    const RenderDataComponent = <ProfileDataWrapper userProfileData={userProfileData}/>;


    return <Paper className={style.UserProfileData}>
        <Typography variant={'h4'} style={{fontWeight: "bold"}}>Мои данные</Typography>
        <Divider/>
        {RenderDataComponent}
    </Paper>
};


export const userProfileData: MainUserProfileData = {
    userName: 'Арсений',
    userNumberPhone: '+375 29 349-63-44',
    userLogin: 'Macha'
};


