import {SetEditModeType} from "../../../../../../../../AppGlobal/AppGlobalTypes/FunctionsTypes";
import {
    LinkData,
    ResponseLinksData
} from "../../../../../../../../Redux/Reducers/FillOrderQuestions/Types/FillOrderQuestions.types";
import {DeleteResponseLink, EditResponseLink, ResponseLinkActionCreatorsType} from "../../Types/QuestionTypes";

export type ResponseLinksPropsType = {
    responseData: ResponseLinksData,
    indexQuestion: number,
    responseLinksObj: ResponseLinkActionCreatorsType,
    displayOnly: boolean,
}

export type ResponseLinkPropsType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    editLinkData: EditResponseLink,
    deleteLinkData: DeleteResponseLink,
    displayOnly: boolean,
}

export type DisplayResponseLinksPropsType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    setEditMode: SetEditModeType,
    deleteLinkData: DeleteResponseLink,
    displayOnly: boolean,
}

export type ResponseLinksFormType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    setEditMode: SetEditModeType,
    editLinkData: EditResponseLink,
}