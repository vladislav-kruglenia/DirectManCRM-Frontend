import {authAPI} from "../../../RestAPI/api";
import {
    ActionCreatorsType,
    SaveAuthStatusAC,
    SaveMyMailAC,
    SaveTokenAC,
    StateType,
    ThunkType
} from "./Auth.types";
import {LoginFormData} from "../../../ReactComponents/Components/Body/Components/LoginPage/Types/LoginPageTypes";

export const SAVE_TOKEN_AUTH = "SAVE_TOKEN_AUTH";
export const SAVE_MY_MAIL_AUTH = "SAVE_MY_MAIL_AUTH";
export const SAVE_AUTH_STATUS_AUTH = "SAVE_AUTH_STATUS_AUTH";

let startState: StateType = {
    token: '',
    isAuth: false,
    userInfo: {
        email: null
    }
};

const authReducer = (state = startState, action: ActionCreatorsType): StateType => {
    switch (action.type) {
        case SAVE_TOKEN_AUTH: {
            return {...state, token: action.token}
        }
        case SAVE_MY_MAIL_AUTH: {
            return {...state, userInfo: {email: action.email}}
        }
        case SAVE_AUTH_STATUS_AUTH: {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state
    }
};

// actionCreators
export let saveToken = (token: string): SaveTokenAC => {
    return {type: SAVE_TOKEN_AUTH, token}
};
export let saveMyMail = (email: string): SaveMyMailAC => {
    return {type: SAVE_MY_MAIL_AUTH, email}
};
export let saveAuthStatus = (isAuth: boolean): SaveAuthStatusAC => {
    return {type: SAVE_AUTH_STATUS_AUTH, isAuth}
};
// actionCreators

// thunkCreators

export let loginThunkCreator = ({email, password}: LoginFormData): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password);
    debugger
        if (response.status === 200) {
            dispatch(saveToken(response.data.token));
            dispatch(saveMyMail(email));
            dispatch(saveAuthStatus(true))
        }
    }
};

// thunkCreators

export default authReducer