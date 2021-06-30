import {InstructionMainData} from "../../../InstructionsBody/InstructionsBody.types";

export type DisplaySendingInstructionProps = {
    editInstructionText: (text: string) => void,
    instructionMainData: InstructionMainData,
}