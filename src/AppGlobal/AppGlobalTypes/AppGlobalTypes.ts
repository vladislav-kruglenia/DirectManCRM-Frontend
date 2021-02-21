import {reducers} from "../../redux/ReduxToolkitStore";

export type AppStateType = ReturnType<typeof reducers>

export type ReturnKeysReduxForm<FormType> = Extract<keyof FormType, string>