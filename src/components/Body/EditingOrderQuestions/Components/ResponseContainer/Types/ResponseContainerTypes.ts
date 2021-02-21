import {ResponseType} from "../../../../../../redux/Types/EditingOrderQuestions/EditingOrderQuestionsReducerTypes";
import {OrderQuestionResponseTypes} from "../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type ResponseContainerProps = {
    indexQuestion: number,
    responseParams: ResponseType,
    editResponseType: (responseType: OrderQuestionResponseTypes) => void
}