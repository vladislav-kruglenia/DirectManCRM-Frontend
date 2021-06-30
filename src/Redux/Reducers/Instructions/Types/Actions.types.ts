import {InstructionMainData} from "../../../../ReactComponents/Components/Body/Components/Account/Components/AccountBody/Components/Instructions/Components/InstructionsBody/InstructionsBody.types";

export interface ActivateSendModePayload extends InstructionMainData{
    
}

export type DisableSendModePayload = {

}

export type DeleteDestinationPayload = {
    index: number,
}

export type EditInstructionTextPayload = {
    instructionText: string,
}
