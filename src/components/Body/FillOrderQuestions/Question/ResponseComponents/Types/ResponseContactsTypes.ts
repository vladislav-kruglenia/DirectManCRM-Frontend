import {ResponseContactActionCreatorsType} from "../../Types/QuestionTypes";
import {ResponseContactsData} from "../../../../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";

export type ResponseContactsPropsType = {
    responseData: ResponseContactsData,
    indexQuestion: number,
    actionCreators: ResponseContactActionCreatorsType,
    displayOnly: boolean,
}