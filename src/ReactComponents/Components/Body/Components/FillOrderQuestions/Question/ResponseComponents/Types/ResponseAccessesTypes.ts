import {DisplayAccesses} from "../../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";
import {ResponseAccessData} from "../../../../../../../../Redux/Reducers/FillOrderQuestions/Types/FillOrderQuestions.types";
import {EditResponseAccess} from "../../Types/QuestionTypes";

export type ResponseAccessesPropsType = {
    responseData: Array<ResponseAccessData>,
    editResponseAccess: EditResponseAccess,
    indexQuestion: number,
    displayOnly: boolean,
}

export type ResponseAccessPropsType = {
    accessType: DisplayAccesses,
    indexQuestion: number,
    indexAccess: number,
    login: string,
    password: string,
    displayOnly: boolean,
    editResponseAccess: EditResponseAccess,
}

export type DisplayResponseAccessesPropsType = {
    type: DisplayAccesses,
    login: string,
    password: string
}

export type ResponseAccessesFormPropsType = {
    accessType: DisplayAccesses,
    login: string,
    password: string,
    indexQuestion: number,
    indexAccess: number,
    setEditMode: () => void,
    editResponseAccess: EditResponseAccess
}

export type ValuesForm = {
    login: string,
    password: string
}

export enum AccessesTitles {
    direct = 'Яндекс Директ',
    google = 'Google Ads',
    instagram = 'Инстаграм',
    facebook = 'Фейсбук',
}