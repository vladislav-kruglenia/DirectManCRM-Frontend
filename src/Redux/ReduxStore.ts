import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import adminReducer from "./Reducers/Admin/Admin.reducer";
import authReducer from "./Reducers/Auth/Auth.reducer";
import projectCreationReducer from "./Reducers/ProjectCreation/ProjectCreation.reducer";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {fillOrderQuestionsReducer} from "./Reducers/FillOrderQuestions/FillOrderQuestions.reducer";


export const reducers = combineReducers({
    adminPage: adminReducer,
    auth: authReducer,
    projectCreation: projectCreationReducer,
    fillOrderQuestions: fillOrderQuestionsReducer,
    form: formReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store:Store<AppStateType> = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store