import {ProjectMainData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ClientAccountInfoModel} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";


export type ProjectSelectionProps = {
    userId: string,
    // currentProjectIndex: number,
    clientAccountInfo: ClientAccountInfo,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}



export type MainProjectDataKeys = keyof ClientAccountInfoModel

export enum TypesProjectsEnum {
    projectsInProgress = "Проекты в работе",
    managedProjects = "Проекты на ведении",
    frozenProjects = "Замороженные проекты",
    completedProjects = "Завершенные проекты",
}

export interface ClientAccountInfo extends ClientAccountInfoModel {
    // userId: string
}

export type ProjectSelectionQueryData = {
    getClientAccountInfo: ClientAccountInfo
}


export type ProjectSelectionQueryVars = {
    userId: string
}


