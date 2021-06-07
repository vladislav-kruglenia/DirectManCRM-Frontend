import {
    LinkData,
    ResponseAccessData,
    ResponsesTypes
} from "../../../../../../../Redux/Reducers/FillOrderQuestions/Types/FillOrderQuestions.types";
import {ClientContactType} from "../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type QuestionPropsTypes = {
    indexQuestion: number,
    question: string,
    displayOnly: boolean,
    response: ResponsesTypes
}

export type TypesResponsesPropsType = {
    displayOnly: boolean,
    response: ResponsesTypes,
    indexQuestion: number
}

export type ResponseContactActionCreatorsType = {
    editResponseContact: EditResponseContact
    deleteResponseContact: DeleteResponseContact
    addResponseContact: AddResponseContact
}

export type ResponseLinkActionCreatorsType = {
    editResponseLink: EditResponseLink
    deleteResponseLink: DeleteResponseLink
    addResponseLink: AddResponseLink
}



export type EditResponseText = (indexQuestion: number, textResponse: string) => void
export type EditResponseAccess = (indexQuestion: number, indexAccess: number, accessData: ResponseAccessData) => void
export type EditResponseLink = (indexQuestion: number, indexLink: number, linkData: LinkData) => void
export type EditResponseContact = (indexQuestion: number, indexContact: number, contactData: ClientContactType) => void
export type DeleteResponseLink = (indexQuestion: number, indexLink: number) => void
export type DeleteResponseContact = (indexQuestion: number, indexContact: number) => void
export type AddResponseLink = (indexQuestion: number) => void
export type AddResponseContact = (indexQuestion: number) => void


