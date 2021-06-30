import {ActivateSendModePayload} from "../../../../../../../../../../../../../../../Redux/Reducers/Instructions/Types/Actions.types";
import {InstructionMainData} from "../../../../../InstructionsBody/InstructionsBody.types";

export type InstructionButtonsBodyProps = {
    instructionButtons: InstructionButtonsFuncTypes,
    instructionMainData: InstructionMainData,
}

export type InstructionButtonsFuncTypes = {
    editInstruction: () => void,
    cloneInstruction: () => void,
    deleteInstruction: () => void,
    sendInstruction: (dto: ActivateSendModePayload) => void,
}



