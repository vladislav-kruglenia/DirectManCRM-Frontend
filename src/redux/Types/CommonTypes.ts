import {ThunkAction} from "redux-thunk";
import {Action} from "redux";


export type CommonThunkType<S, A extends Action, P = Promise<void>, E = unknown> = ThunkAction<P, S, E, A>