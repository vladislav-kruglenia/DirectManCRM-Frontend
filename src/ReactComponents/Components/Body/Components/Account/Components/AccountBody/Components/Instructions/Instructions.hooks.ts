import {InstructionButtonsFuncTypes} from "./Components/Instruction/Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {useInstructionsReducerActions} from "../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";

export const useInstructionButtonsCallbacks = ():InstructionButtonsFuncTypes => {
    const {editSendModeAction} = useInstructionsReducerActions();
    const sendInstruction = () => editSendModeAction(true);

    return {
        sendInstruction,
        editInstruction: () => alert("edit"),
        cloneInstruction: () => alert("clone"),
        deleteInstruction: () => alert("delete"),
    }
};