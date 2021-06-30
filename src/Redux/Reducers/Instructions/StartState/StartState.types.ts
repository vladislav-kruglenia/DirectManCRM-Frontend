import {InstructionTypeEnum} from "../../../../AppGlobal/AppGlobalTypes/InstructionsGlobal.types";
import { InstructionMainData } from "../../../../ReactComponents/Components/Body/Components/Account/Components/AccountBody/Components/Instructions/Components/InstructionsBody/InstructionsBody.types";

export type StartStateType =  {
    isSendMode: boolean,
    sendModeParams: SendModeParams,
}

export interface SendModeParams{
    instructionMainData: InstructionMainData,
    destinations: DestinationType[],
}

export type DestinationType = {
    destinationId: string,
    destinationName: string,
}



