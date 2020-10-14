import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import projectCreationReducer from "./projectCreationReducer";


const reducers = combineReducers({
    adminPage: adminReducer,
    auth: authReducer,
    projectCreation: projectCreationReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store