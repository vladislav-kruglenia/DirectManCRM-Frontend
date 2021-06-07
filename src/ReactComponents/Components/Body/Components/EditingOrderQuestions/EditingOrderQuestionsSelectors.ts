import {AppStateType} from "../../../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";
import {
    Access,
    AssessesTypeResponse,
    QuestionType
} from "../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";

let getQuestions = (state: AppStateType) => state.editingOrderQuestions.questions;
let getBriefName = (state: AppStateType) => state.editingOrderQuestions.briefName;
let getAccessesTypesArr = (state: AppStateType) => state.editingOrderQuestions.assessesTypes.map((accessType: Access):Access => {
    return {
        idAccess: accessType.idAccess,
        accessName: accessType.accessName,
        accessLink: accessType.accessLink,
        isChanged: false,
    }});

let getIsErrors = (state: AppStateType) => {
    let isErrors = false;
    isErrors = state.editingOrderQuestions.questions.length === 0 ? true : isErrors;
    state.editingOrderQuestions.questions.forEach((question: QuestionType) => {
        isErrors = question.response.type === "None" ? true : isErrors;
        if(question.response.type === "Accesses"){
            let response = question.response as AssessesTypeResponse;
            isErrors = response.assesses.length === 0 ? true : isErrors;
            response.assesses.forEach((access: Access) => {
                isErrors = access.accessName === "" || access.accessLink === "" ? true : isErrors
            })
        }
    });
    return isErrors
};

let getArrayAccessesTypesNames = (state: AppStateType) => {
    return state.editingOrderQuestions.assessesTypes.map((access: Access) => {
        return access.accessName
    })
};

export let getQuestionsSelector = createSelector(getQuestions, data => data);
export let getBriefNameSelector = createSelector(getBriefName, data => data);
export let getAccessesTypesSelector = createSelector(getAccessesTypesArr, data => data);
export let getIsErrorsSelector = createSelector(getIsErrors, data => data);
export let getArrayAccessesTypesNamesSelector = createSelector(getArrayAccessesTypesNames, data => data);