import {ProjectStage} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";

export type StepperProps = {
    projectStages: ProjectStage[]
}

export type HorizontalLinearStepperProps = {
    projectStages: ProjectStage[]
}

export type StepComponentProps = {
    projectStage: ProjectStage
}

export enum ProjectStageTitlesEnum {
    KeysCollection = "Сбор ключей",
    AdSetup = "Настройка рекламы",
    SetupReady = "Настройка завершена",
    ManagedProject = "Проект на ведении",
}

