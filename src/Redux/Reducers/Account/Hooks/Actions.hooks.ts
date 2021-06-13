import {useDispatch} from "react-redux";
import {useCommonAction} from "../../../../AppGlobal/AppGlobalHooks/GlobalHooks";
import {
    updateProjectMainData,
    updateCurrentProjectIndex,
    addTab,
    updateIndexMainLink,
    deleteTab,
    addResponseComment,
    editTextResponseComment,
    removeResponseComment,
} from "../Account.reducer";
import {
    DeleteTabPayload,
    AddResponseCommentPayload,
    UpdateProjectMainDataPayload,
    EditTextResponseCommentPayload,
    RemoveResponseCommentPayload,
} from "../Types/Actions.types";

export const useAccountReducerActions = () => {
    const dispatch = useDispatch();

    const updateProjectMainDataAction = useCommonAction<UpdateProjectMainDataPayload>(updateProjectMainData, dispatch);
    const addTabAction = useCommonAction(addTab, dispatch);
    const deleteTabAction = useCommonAction<DeleteTabPayload>(deleteTab, dispatch);
    const updateCurrentProjectIndexAction = useCommonAction<number>(updateCurrentProjectIndex, dispatch);
    const updateIndexMainLinkAction = useCommonAction<number>(updateIndexMainLink, dispatch);

    const addResponseCommentAction = useCommonAction<AddResponseCommentPayload>(addResponseComment, dispatch);
    const editTextResponseCommentAction = useCommonAction<EditTextResponseCommentPayload>(editTextResponseComment, dispatch);
    const removeResponseCommentAction = useCommonAction<RemoveResponseCommentPayload>(removeResponseComment, dispatch);

    return {
        addResponseCommentAction, updateProjectMainDataAction, addTabAction,
        deleteTabAction, updateCurrentProjectIndexAction, updateIndexMainLinkAction,
        editTextResponseCommentAction, removeResponseCommentAction
    };
};
