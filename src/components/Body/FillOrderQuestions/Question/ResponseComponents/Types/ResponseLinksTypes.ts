import {SetEditModeType} from "../../../../../../AppGlobal/AppGlobalTypes/FunctionsTypes";
import {
    LinkData,
    ResponseLinksData
} from "../../../../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";
import {DeleteResponseLink, EditResponseLink, ResponseLinkActionCreatorsType} from "../../Types/QuestionTypes";

export type ResponseLinksPropsType = {
    responseData: ResponseLinksData,
    indexQuestion: number,
    responseLinksObj: ResponseLinkActionCreatorsType
}

export type ResponseLinkPropsType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    editLinkData: EditResponseLink,
    deleteLinkData: DeleteResponseLink,
}

export type DisplayResponseLinksPropsType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    setEditMode: SetEditModeType,
    deleteLinkData: DeleteResponseLink,
}

export type ResponseLinksFormType = {
    indexQuestion: number,
    indexLink: number,
    linkData: LinkData,
    setEditMode: SetEditModeType,
    editLinkData: EditResponseLink,
}