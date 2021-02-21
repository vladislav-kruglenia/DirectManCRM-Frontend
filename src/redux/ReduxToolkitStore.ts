import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import {fillOrderQuestionsReducer} from "./fillOrderQuestionsReducer";
import {reducer as formReducer} from "redux-form";
import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import projectCreationReducer from "./projectCreationReducerImmer";
import editingOrderQuestionsReducer from "./editingOrderQuestionsReducer";

export const reducers = combineReducers({
    adminPage: adminReducer,
    auth: authReducer,
    projectCreation: projectCreationReducer,
    fillOrderQuestions: fillOrderQuestionsReducer,
    editingOrderQuestions: editingOrderQuestionsReducer,
    form: formReducer
});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers
});