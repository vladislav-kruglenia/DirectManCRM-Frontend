import {ProjectMainData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ClientAccountInfoModel} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";

export type ProjectSelectionProps = {
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number) => void,
    userId: string
}

export type MainProjectDataKeys = keyof ClientAccountInfoModel

export enum TypesProjectsEnum {
    projectsInProgress = "Проекты в работе",
    managedProjects = "Замороженные проекты",
    frozenProjects = "Завершенные проекты",
    completedProjects = "Проекты на ведении",
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
