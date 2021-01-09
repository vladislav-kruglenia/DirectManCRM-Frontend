import {SAVE_AUTH_STATUS_AUTH, SAVE_MY_MAIL_AUTH, SAVE_TOKEN_AUTH} from "../authReducer";
import {CommonThunkType} from "./CommonTypes";

export type StateType = {
    token: string,
    isAuth: boolean,
    userInfo: {
        email: string | null
    }
}

export type SaveTokenAC = {
    type: typeof SAVE_TOKEN_AUTH,
    token: string
}
export type SaveMyMailAC = {
    type: typeof SAVE_MY_MAIL_AUTH,
    email: string
}
export type SaveAuthStatusAC = {
    type: typeof SAVE_AUTH_STATUS_AUTH,
    isAuth: boolean
}

export type ActionCreatorsType = SaveTokenAC
    | SaveMyMailAC
    | SaveAuthStatusAC

export type ThunkType = CommonThunkType<StateType, ActionCreatorsType>