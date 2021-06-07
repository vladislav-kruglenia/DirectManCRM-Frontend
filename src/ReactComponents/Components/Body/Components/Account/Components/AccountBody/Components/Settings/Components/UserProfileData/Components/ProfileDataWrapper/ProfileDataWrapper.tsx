import React, {FC, useState} from "react";
import style from "./ProfileDataWrapper.module.scss";
import {ValueDisplay} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayUserProfileData} from "../UserProfileDataDisplay/DisplayUserProfileData";
import {UserProfileDataFormMemo} from "../UserProfileDataForm/UserProfileDataForm";
import {ProfileDataWrapperProps} from "./ProfileDataWrapper.types";
import {DisplayTypeEnum} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";

export const ProfileDataWrapper:FC<ProfileDataWrapperProps> = (props) => {
    const {userProfileData} = props;
    const [editMode, setEditMode] = useState(false);

    return <div className={style.ProfileDataWrapper}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={
                <DisplayUserProfileData
                    userData={userProfileData}
                    setEditMode={value => setEditMode(value)}
                />
            }
            grandFormComponent={
                <UserProfileDataFormMemo
                    userData={userProfileData}
                    exitEditMode={() => setEditMode(false)}
                    editUserData={()=>{}}
                />
            }
        />
    </div>
};