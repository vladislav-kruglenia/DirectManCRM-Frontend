import {Dispatch, useCallback} from "react";

export function useCommonAction<P = {}>(actionFunc: (dto: P) => any, dispatch: Dispatch<any>) {

    return useCallback((dto: P) => {
        dispatch(actionFunc(dto))
    }, [dispatch, actionFunc]);
}