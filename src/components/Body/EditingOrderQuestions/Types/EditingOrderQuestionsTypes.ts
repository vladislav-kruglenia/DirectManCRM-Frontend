import {
    QuestionTextData,
    ResponseType
} from "../../../../redux/Types/EditingOrderQuestions/EditingOrderQuestionsReducerTypes";
import {OrderQuestionResponseTypes} from "../../../../AppGlobal/AppGlobalTypes/TypesComponents";

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