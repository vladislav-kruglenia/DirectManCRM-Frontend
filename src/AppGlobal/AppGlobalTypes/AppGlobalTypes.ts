import React from "react";
import {reducers} from "../../Redux/ReduxToolkitStore";

export type AppStateType = ReturnType<typeof reducers>

export type ReturnKeysReduxForm<FormType> = Extract<keyof FormType, string>

export type HandleClickType = (event: React.MouseEvent<HTMLElement>) => void;

