import {InstructionButtonsFuncTypes} from "./Components/Instruction/Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {useInstructionsReducerActions} from "../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";

export const useInstructionButtonsCallbacks = ():InstructionButtonsFuncTypes => {
    const {activateSendModeAction} = useInstructionsReducerActions();

    return {
        editInstruction: () => alert("edit"),
        cloneInstruction: () => alert("clone"),
        deleteInstruction: () => alert("delete"),
        sendInstruction: (dto) => activateSendModeAction(dto),
    }
};