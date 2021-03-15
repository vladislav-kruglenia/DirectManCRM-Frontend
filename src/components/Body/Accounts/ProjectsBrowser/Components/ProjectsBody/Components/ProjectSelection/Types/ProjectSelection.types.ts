import {ProjectMainData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ClientAccountInfoModel} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";

export type ProjectSelectionProps = {
    currentProjectIndex: number,
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}

export type MainProjectDataKeys = keyof ClientAccountInfoModel

export enum TypesProjectsEnum {
    projectsInProgress = "Проекты в работе",
    managedProjects = "Замороженные проекты",
    frozenProjects = "Завершенные проекты",
    completedProjects = "Проекты на ведении",
}