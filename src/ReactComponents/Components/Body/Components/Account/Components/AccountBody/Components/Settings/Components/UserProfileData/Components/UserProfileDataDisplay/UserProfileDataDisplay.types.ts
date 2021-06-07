import {MainUserProfileData} from "../../UserProfileData.types";

export interface DisplayUserProfileDataProps{
    userData: MainUserProfileData,
    setEditMode: (value: boolean) => void,
}

export type UserValueProps = {
    labelText: string,
    dataValue: string,
}

export interface UserProfileData extends MainUserProfileData {
    userPassword: string,
}