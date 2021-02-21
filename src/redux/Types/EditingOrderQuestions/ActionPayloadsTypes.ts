import {OrderQuestionResponseTypes} from "../../../AppGlobal/AppGlobalTypes/TypesComponents";
import {QuestionTextData} from "./EditingOrderQuestionsReducerTypes";

export type EditBriefNamePayload = {
    briefName: string
}

export type EditQuestionTextPayload = {
    indexQuestion: number,
    questionTextData: QuestionTextData
}

export type EditResponseTypePayload = {
    indexQuestion: number,
    responseType: OrderQuestionResponseTypes
}

export type EditNumberLinksPayload = {
    numberLinks: number,
    indexQuestion: number
}

export type EditAccessTypePayload = {
    idAccess: string
    indexQuestion: number
    indexAccess: number
}

export type EditNameAndLinkAccessPayload = {
    accessName: string
    accessLink: string
    indexQuestion: number
    indexAccess: number
    idAccess: string
}

export type AddAccessTypePayload = {
    indexQuestion: number
}

export type DeleteQuestionPayload = {
    indexQuestion: number
}

export type DeleteAccessType = {
    indexQuestion: number
    indexAccess: number
}