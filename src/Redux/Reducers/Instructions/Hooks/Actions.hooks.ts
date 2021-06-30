import {useDispatch} from "react-redux";
import {useCommonAction} from "../../../../AppGlobal/AppGlobalHooks/GlobalHooks";
import {DeleteDestinationPayload, ActivateSendModePayload, DisableSendModePayload, EditInstructionTextPayload} from "../Types/Actions.types";
import {deleteDestination, addDestination, activateSendMode, disableSendMode, editInstructionText} from "../Instructions.reducer";

export const useInstructionsReducerActions = () => {
    const dispatch = useDispatch();

    const activateSendModeAction = useCommonAction<ActivateSendModePayload>(activateSendMode, dispatch);
    const disableSendModeAction = useCommonAction<DisableSendModePayload>(disableSendMode, dispatch);
    const addDestinationAction = useCommonAction(addDestination, dispatch);
    const deleteDestinationAction = useCommonAction<DeleteDestinationPayload>(deleteDestination, dispatch);
    const editInstructionTextAction = useCommonAction<EditInstructionTextPayload>(editInstructionText, dispatch);

    return {
        activateSendModeAction, disableSendModeAction, addDestinationAction,
        deleteDestinationAction, editInstructionTextAction,
    }
};