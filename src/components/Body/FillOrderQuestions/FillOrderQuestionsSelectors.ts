import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";
import {QuestionAndResponse} from "../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";

let selectQuestions = (state: AppStateType) =>  state.fillOrderQuestions.questions;

let getNoDataStatus = (state: AppStateType) => {
    let isNoData = false;
    state.fillOrderQuestions.questions.map((question:QuestionAndResponse) => {
        switch(question.response.responseType){
            case "Links": {
                if (question.response.data.isNoData) isNoData = true;
                break;
            }
            case "Contacts": {
                if (question.response.data.isNoData) isNoData = true;
                break;
            }
        }
        return question
    });
    return isNoData
};

export let getNoDataStatusSelector = createSelector(getNoDataStatus, status => status);

export let getQuestionsSelector = createSelector(selectQuestions, questions => questions);