import {SendModeParams, StartStateType} from "./StartState.types";
import {InstructionMainDataService} from "./Services/InstructionMainDataService";

export class InstructionsReducerStartState{
    private readonly isSendMode: boolean;
    private readonly sendModeParams: SendModeParams;

    constructor(){
        this.isSendMode = false;
        this.sendModeParams = {
            destinations: [],
            instructionMainData: new InstructionMainDataService().instructionMainDataEmpty,
        }
    }

    get initialState(): StartStateType{
        return {
            isSendMode: this.isSendMode,
            sendModeParams: this.sendModeParams,
        }
    }
}

