import {useAccountReducerActions} from "../../../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Hooks/Actions.hooks";
import {UseCommentFormCallbacksDTO, UseStartTextFormDTO} from "./CommentForm.types";
import {useSelector} from "react-redux";
import {getTextMainFormSelector} from "../../../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Account.selectors";

export const useCommentFormCallbacks = (dto: UseCommentFormCallbacksDTO) => {
    const {editText, isMainForm, isResponse} = dto;

    const {editTextResponseCommentAction} = useAccountReducerActions();
    const onBlurFunc = isMainForm ? (text: string) => editTextResponseCommentAction({text}) : undefined;

    const {removeResponseCommentAction} = useAccountReducerActions();
    const editTextFunc = (text: string) => {
        if(isResponse) removeResponseCommentAction({});
        editTextResponseCommentAction({text: ""});
        editText(text);
    };

    return {onBlurFunc, editTextFunc}
};

export const useStartTextForm = (dto: UseStartTextFormDTO) => {
    const {isMainForm, startText} = dto;

    const textMainForm = useSelector(getTextMainFormSelector);
    return isMainForm ? textMainForm : startText;
};