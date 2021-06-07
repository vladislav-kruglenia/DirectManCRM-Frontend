import {ResponseContactActionCreatorsType} from "../../Types/QuestionTypes";
import {ResponseContactsData} from "../../../../../../../../Redux/Reducers/FillOrderQuestions/Types/FillOrderQuestions.types";

export type ResponseContactsPropsType = {
    responseData: ResponseContactsData,
    indexQuestion: number,
    actionCreators: ResponseContactActionCreatorsType,
    displayOnly: boolean,
}