import {
    QuestionTextData,
    ResponseType
} from "../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";
import {OrderQuestionResponseTypes} from "../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type QuestionProps = {
    responseParams: ResponseType,
    indexQuestion: number,
    questionTextData: QuestionTextData,
    questionActions: QuestionActions,
    editResponseType: EditResponseTypeAction
}

export type QuestionActions = {
    editQuestionTextAction: (indexQuestion: number, questionText: string) => void
    deleteQuestionAction: (indexQuestion: number) => void
}

export type EditResponseTypeAction = (responseType: OrderQuestionResponseTypes, indexQuestion: number) => void