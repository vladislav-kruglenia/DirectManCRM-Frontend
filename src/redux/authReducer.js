import {authAPI} from "../api/api";

const SAVE_TOKEN_AUTH = "SAVE_TOKEN_AUTH";
const SAVE_MY_MAIL_AUTH = "SAVE_MY_MAIL_AUTH";
const SAVE_AUTH_STATUS_AUTH = "SAVE_AUTH_STATUS_AUTH";

let startState = {
    token: '',
    isAuth: false,
    userInfo: {
        email: null
    }
};

const authReducer = (state = startState, action) => {
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
export let saveToken = (token) => {
    return {type: SAVE_TOKEN_AUTH, token}
};
export let saveMyMail = (email) => {
    return {type: SAVE_MY_MAIL_AUTH, email}
};
export let saveAuthStatus = (isAuth) => {
    return {type: SAVE_AUTH_STATUS_AUTH, isAuth}
};
// actionCreators

// thunkCreators

export let loginThunkCreator = ({email, password}) => {
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