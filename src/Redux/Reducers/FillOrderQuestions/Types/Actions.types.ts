import {
    ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST,
    ADD_RESPONSE_LINK_FILL_ORDER_QUEST,
    DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST,
    DELETE_RESPONSE_LINK_FILL_ORDER_QUEST,
    EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST, EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST, EDIT_RESPONSE_LINK_FILL_ORDER_QUEST,
    EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST
} from "../FillOrderQuestions.reducer";
import {LinkData, ResponseAccessData} from "./FillOrderQuestions.types";
import {ClientContactType} from "../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type EditResponseTextAC = {
    type: typeof EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST,
    indexQuestion: number,
    response: string
}

export type EditResponseAccessAC = {
    type: typeof EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST,
    indexQuestion: number,
    indexAccess: number,
    accessData: ResponseAccessData,
}

export type EditResponseLinkAC = {
    type: typeof EDIT_RESPONSE_LINK_FILL_ORDER_QUEST,
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
}

export type EditResponseContactAC = {
    type: typeof EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST,
    indexQuestion: number,
    indexContact: number,
    contactData: ClientContactType,
}

export type DeleteResponseLinkAC = {
    type: typeof DELETE_RESPONSE_LINK_FILL_ORDER_QUEST,
    indexQuestion: number,
    indexLink: number,
}

export type DeleteResponseContactAC = {
    type: typeof DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST,
    indexQuestion: number,
    indexContact: number,
}
export type AddResponseLinkAC = {
    type: typeof ADD_RESPONSE_LINK_FILL_ORDER_QUEST,
    indexQuestion: number,
    linkData: LinkData,
}

export type AddResponseContactAC = {
    type: typeof ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST,
    indexQuestion: number,
    contactData: ClientContactType,
}


export type ActionCreatorsType = EditResponseTextAC
    | EditResponseAccessAC
    | EditResponseLinkAC
    | EditResponseContactAC
    | DeleteResponseLinkAC
    | DeleteResponseContactAC
    | AddResponseLinkAC
    | AddResponseContactAC