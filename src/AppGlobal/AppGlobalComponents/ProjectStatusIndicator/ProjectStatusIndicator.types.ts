import {ProjectStatus} from "../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export type ProjectStatusIndicatorProps = {
    projectStatus: ProjectStatus | ""
}