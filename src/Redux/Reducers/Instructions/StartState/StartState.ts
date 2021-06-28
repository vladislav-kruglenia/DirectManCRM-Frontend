import {SendModeParams, StartStateType} from "./StartState.types";

export class InstructionsReducerStartState{
    private readonly isSendMode: boolean;
    private readonly sendModeParams: SendModeParams;

    constructor(){
        this.isSendMode = false;
        this.sendModeParams = {
            destinations: [],
            instructionId: "",
            instructionText: "",
        }
    }

    get initialState(): StartStateType{
        return {
            isSendMode: this.isSendMode,
            sendModeParams: this.sendModeParams,
        }
    }
}