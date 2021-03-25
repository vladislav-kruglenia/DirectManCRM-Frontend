import {ProjectMainData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ProjectStatus} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export type ProjectSelectionContainerProps = {
    userId: string,
    // currentProjectIndex: number,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}