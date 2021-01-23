import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";

let selectQuestions = (state: AppStateType) =>  state.fillOrderQuestions.questions;

export let getQuestionsSelector = createSelector(selectQuestions, questions => questions);