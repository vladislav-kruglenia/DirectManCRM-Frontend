import {ResponseType} from "../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";
import {OrderQuestionResponseTypes} from "../../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type ResponseContainerProps = {
    indexQuestion: number,
    responseParams: ResponseType,
    editResponseType: (responseType: OrderQuestionResponseTypes) => void
}