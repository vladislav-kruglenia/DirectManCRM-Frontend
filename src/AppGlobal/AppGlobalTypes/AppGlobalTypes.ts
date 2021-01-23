import {reducers} from "../../redux/ReduxStore";

export type AppStateType = ReturnType<typeof reducers>

export type ReturnKeysReduxForm<FormType> = Extract<keyof FormType, string>