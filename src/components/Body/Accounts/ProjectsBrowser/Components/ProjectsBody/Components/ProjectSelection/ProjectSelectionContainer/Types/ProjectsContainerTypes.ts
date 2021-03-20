import {ProjectMainData} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {MainProjectData} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export type ProjectsContainerProps = {
    title: string,
    currentProjectIndex: number,
    projectsMainData: MainProjectData[],
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}

export type ProjectMainInfoProps = {
    currentProjectIndex: number,
    projectMainData: MainProjectData,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}