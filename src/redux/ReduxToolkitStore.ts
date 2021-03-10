import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import {fillOrderQuestionsReducer} from "./fillOrderQuestionsReducer";
import {reducer as formReducer} from "redux-form";
import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import projectCreationReducer from "./projectCreationReducerImmer";
import editingOrderQuestionsReducer from "./editingOrderQuestionsReducer";
import clientAccountReducer from "./AccountsReducers/ClientAccountReducer/clientAccountReducer"

export const reducers = combineReducers({
    adminPage: adminReducer,
    auth: authReducer,
    projectCreation: projectCreationReducer,
    fillOrderQuestions: fillOrderQuestionsReducer,
    editingOrderQuestions: editingOrderQuestionsReducer,
    clientAccount: clientAccountReducer,
    form: formReducer
});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers
});