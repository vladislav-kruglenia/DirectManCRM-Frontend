import authReducer from "./Reducers/Auth/Auth.reducer";
import {fillOrderQuestionsReducer} from "./Reducers/FillOrderQuestions/FillOrderQuestions.reducer";
import {reducer as formReducer} from "redux-form";
import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import projectCreationReducer from "./Reducers/ProjectCreation/ProjectCreation.reducer.immer";
import editingOrderQuestionsReducer from "./Reducers/EditingOrderQuestions/EditingOrderQuestions.reducer";
import accountReducer from "./Reducers/Account/Account.reducer"

export const reducers = combineReducers({
    auth: authReducer,
    projectCreation: projectCreationReducer,
    fillOrderQuestions: fillOrderQuestionsReducer,
    editingOrderQuestions: editingOrderQuestionsReducer,
    account: accountReducer,
    form: formReducer
});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers
});