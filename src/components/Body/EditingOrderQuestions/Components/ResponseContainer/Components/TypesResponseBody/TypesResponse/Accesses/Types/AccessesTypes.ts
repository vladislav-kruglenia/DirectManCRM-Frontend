import {Access} from "../../../../../../../../../../redux/Types/EditingOrderQuestions/EditingOrderQuestionsReducerTypes";

export type AccessesProps = {
    indexQuestion: number,
    assessesData: Array<Access>
}

export type AccessProps = {
    accessData: Access,
    accessTypesArr: Array<Access>,
    editAccessType: (idAccess: string) => void,
    editNameAndLinkAccess: (accessLink: string, accessName: string) => void
    deleteAccess: () => void
}

export type EditAccessTypeAction = (indexQuestion: number, indexAccess: number, idAccess: string) => void
export type AddAccessType = (indexQuestion: number) => void
export type DeleteAccess = (indexQuestion: number, indexAccess: number) => void

export type EditNameAndLinkAccessAction = (idAccess: string, indexQuestion: number,
                                           indexAccess: number, accessLink: string, accessName: string) => void
