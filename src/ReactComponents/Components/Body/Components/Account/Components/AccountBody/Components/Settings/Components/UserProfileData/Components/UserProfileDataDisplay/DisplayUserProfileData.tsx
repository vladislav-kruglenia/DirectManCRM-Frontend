import React, {FC} from "react";
import style from "./UserProfileDataDisplay.module.scss"
import {DisplayUserProfileDataProps, UserValueProps} from "./UserProfileDataDisplay.types";
import {Typography} from "@material-ui/core";
import {EditButton} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";

export const DisplayUserProfileData: FC<DisplayUserProfileDataProps> = (props) => {
    const {userName, userLogin, userNumberPhone} = props.userData;

    return <div className={style.UserProfileDataDisplay}>
        <UserValue labelText={'Имя'} dataValue={userName}/>
        <UserValue labelText={'Логин'} dataValue={userLogin}/>
        <UserValue labelText={'Телефон'} dataValue={userNumberPhone}/>
        <div className={style.editButton}>
            <EditButton size={"small"} iconSize={"default"} onClickFunc={() => props.setEditMode(true)}/>
        </div>
    </div>
};


export const UserValue: FC<UserValueProps> = (props) => {
    const {labelText, dataValue} = props;

    return <div className={style.UserValue}>
        <Typography variant={"overline"} className={style.label}>{labelText}:</Typography>
        <Typography className={style.value}>{dataValue}</Typography>
    </div>
};
