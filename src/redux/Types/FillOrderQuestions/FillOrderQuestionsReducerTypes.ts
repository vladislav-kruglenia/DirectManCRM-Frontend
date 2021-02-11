import {
    AddResponseContactAC, AddResponseLinkAC,
    DeleteResponseContactAC,
    DeleteResponseLinkAC,
    EditResponseAccessAC,
    EditResponseContactAC,
    EditResponseLinkAC,
    EditResponseTextAC
} from "./ActionCreators";
import {ClientContactType} from "../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";
import {DisplayAccesses} from "../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type StateType = {
    briefType: 'contextAdvertising' | 'socialNetworksAdvertising' | "youtubeAdvertising" | null,
    questions: Array<QuestionAndResponse>
}

export type QuestionAndResponse = {
    idQuestion: string,
    question: string,
    response: ResponsesTypes
}
export type ResponsesTypes = ResponseText | ResponseLinks | ResponseAccesses | ResponseContacts



export type ResponseText = {
    responseType: "Text",
    data: ResponseTextData
}
export type ResponseLinks = {
    responseType: "Links",
    data: ResponseLinksData
}

export type ResponseAccesses = {
    responseType: "Accesses",
    data: Array<ResponseAccessData>
}
export type ResponseContacts = {
    responseType: "Contacts",
    data: ResponseContactsData
}



export type ResponseTextData = {
    textData: string,
    isChanged: boolean
}
export type ResponseLinksData = {
    numberLinks: number,
    isNoData: boolean,
    linksData: Array<LinkData>
}
export type ResponseAccessData = {
    accessType: DisplayAccesses,
    login: string,
    password: string
}

export type ResponseContactsData = {
    isNoData: boolean,
    contactsData: Array<ClientContactType>
}




export type LinkData = {
    isChanged: boolean
    productName: string,
    productLink: string
}








export type ActionCreatorsObjType = {
    editResponseText: EditResponseTextType,
    editResponseAccess: EditResponseAccessType,
    editResponseLink: EditResponseLinkType,
    editResponseContact: EditResponseContactType,
    deleteResponseLink: DeleteResponseLinkType
    deleteResponseContact: DeleteResponseContactType
    addResponseLink: AddResponseLinkType
    addResponseContact: AddResponseContactType
}

export type EditResponseTextType = (indexQuestion: number, textResponse: string) => EditResponseTextAC
export type EditResponseAccessType = (indexQuestion: number, indexAccess: number, accessData: ResponseAccessData) => EditResponseAccessAC
export type EditResponseLinkType = (indexQuestion: number, indexLink: number, linkData: LinkData) => EditResponseLinkAC
export type EditResponseContactType = (indexQuestion: number, indexContact: number, contactData: ClientContactType) => EditResponseContactAC
export type DeleteResponseLinkType = (indexQuestion: number, indexLink: number) => DeleteResponseLinkAC
export type DeleteResponseContactType = (indexQuestion: number, indexContact: number) => DeleteResponseContactAC
export type AddResponseLinkType = (indexQuestion: number) => AddResponseLinkAC
export type AddResponseContactType = (indexQuestion: number) => AddResponseContactAC

