import {InstructionButtonsFuncTypes} from "./Components/Instruction/Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";

export const useInstructionButtonsCallbacks = ():InstructionButtonsFuncTypes => {
    return {
        editInstruction: () => alert("edit"),
        cloneInstruction: () => alert("clone"),
        deleteInstruction: () => alert("delete"),
        sendInstruction: () => alert("send"),
    }
};