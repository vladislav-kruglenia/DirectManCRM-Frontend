import adminReducer from "./Reducers/Admin/Admin.reducer";
import authReducer from "./Reducers/Auth/Auth.reducer";
import {fillOrderQuestionsReducer} from "./Reducers/FillOrderQuestions/FillOrderQuestions.reducer";
import {reducer as formReducer} from "redux-form";
import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import projectCreationReducer from "./Reducers/ProjectCreation/ProjectCreation.reducer.immer";
import editingOrderQuestionsReducer from "./Reducers/EditingOrderQuestions/EditingOrderQuestions.reducer";
import clientAccountReducer from "./Reducers/Account/Account.reducer"

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