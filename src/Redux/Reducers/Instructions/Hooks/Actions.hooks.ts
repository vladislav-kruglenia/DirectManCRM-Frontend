import {useDispatch} from "react-redux";
import {useCommonAction} from "../../../../AppGlobal/AppGlobalHooks/GlobalHooks";
import {EditSendModeParamsPayload, DeleteDestinationPayload} from "../Types/Actions.types";
import {editSendMode, editSendModeParams, deleteDestination, addDestination} from "../Instructions.reducer";

export const useInstructionsReducerActions = () => {
    const dispatch = useDispatch();

    const editSendModeAction = useCommonAction<boolean>(editSendMode, dispatch);
    const editSendModeParamsAction = useCommonAction<EditSendModeParamsPayload>(editSendModeParams, dispatch);
    const addDestinationAction = useCommonAction(addDestination, dispatch);
    const deleteDestinationAction = useCommonAction<DeleteDestinationPayload>(deleteDestination, dispatch);

    return {editSendModeAction, editSendModeParamsAction, addDestinationAction, deleteDestinationAction}
};