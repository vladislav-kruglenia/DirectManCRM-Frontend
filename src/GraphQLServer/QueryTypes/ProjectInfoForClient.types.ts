import {MainProjectData} from "./ClientAccountInfo.types";
import {DebtPercentageEnum, ProjectStageEnum} from "../../Redux/Reducers/Account/Types/Account.enums";

export interface CommentType {
    commentText: string,
    commentDate: string,
    authorId: string,
    authorLogin: string,
    commentId: string,
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
    stageType: ProjectStageEnum,
}


export interface ProjectDates {
    startDate: string,
    numberDaysForProject: number,
}

export interface ProjectData {
    indexActiveStage: number,
    projectStages: ProjectStage[],
    dates: ProjectDates
    orderedServices: OrderedServices,
    projectNotes: string,
    briefId: string,
    comments: CommentType[],
    /*dept: Debt,*/
}


export interface ProjectInfoForClientModel extends MainProjectData{
    projectData: ProjectData,
}