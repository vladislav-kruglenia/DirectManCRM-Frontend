import {MainProjectData} from "./ClientAccountInfo.types";
import {DebtPercentageEnum, ProjectStageEnum} from "../ClientAccount.enums";

export interface Comment {
    commentText: string,
    commentDate: string,
    authorId: string,
    authorLogin: string,
}


export interface Debt {
    isExists: boolean,
    amountDebt?: number,
    debtPercentage?: DebtPercentageEnum,
}


export interface OrderedService {
    isReady: boolean,
    serviceName: string
}

export interface OrderedServices {
    tariffName: string,
    services: OrderedService[],
}




export interface ProjectStage {
    isActive: boolean,
    stageType: ProjectStageEnum,
}


export interface ProjectDates {
    startDate: string,
    numberDaysForProject: number,
}

export interface ProjectData {
    projectStages: Array<ProjectStage>,
    dates: ProjectDates
    dept: Debt,
    orderedServices: OrderedServices,
    projectNotes: string,
    briefId: string,
    comments: Array<Comment>,
}


export interface ProjectInfoForClientModel extends MainProjectData{
    projectData: ProjectData,
}