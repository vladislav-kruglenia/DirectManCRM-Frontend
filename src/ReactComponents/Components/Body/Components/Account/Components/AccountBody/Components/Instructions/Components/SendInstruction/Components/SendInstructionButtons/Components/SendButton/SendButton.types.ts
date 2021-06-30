import {InstructionMainData} from "../../../../../InstructionsBody/InstructionsBody.types";

export type SendButtonProps = {
    instructionMainData: InstructionMainData,
    disableSendMode: VoidFunction,
}