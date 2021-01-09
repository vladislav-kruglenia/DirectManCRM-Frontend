import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import projectCreationReducer from "./projectCreationReducer";
import {AppStateType} from "../AppGlobalTypes/AppGlobalTypes";


export const reducers = combineReducers({
    adminPage: adminReducer,
    auth: authReducer,
    projectCreation: projectCreationReducer,
    form: formReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store:Store<AppStateType> = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store