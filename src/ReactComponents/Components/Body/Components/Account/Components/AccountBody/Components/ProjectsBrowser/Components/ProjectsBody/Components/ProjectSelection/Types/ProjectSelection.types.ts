import {ProjectMainData} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {ClientAccountInfoModel} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/ClientAccount.enums";


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


