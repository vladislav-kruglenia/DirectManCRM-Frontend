import {MainUserProfileData} from "../../UserProfileData.types";

export type UserProfileDataFormProps = {
    userData: MainUserProfileData,
    // mutationData?: MutationTypes<UpdateUserDataRes>
    exitEditMode: () => void,
    editUserData: () => void,
}