import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InstructionsReducerStartState} from "./StartState/StartState";
import {
    ActivateSendModePayload,
    DeleteDestinationPayload,
    DisableSendModePayload,
    EditInstructionTextPayload
} from "./Types/Actions.types";
import {DestinationType} from "./StartState/StartState.types";
import {v4 as uuidv4} from 'uuid';
import {InstructionMainDataService} from "./StartState/Services/InstructionMainDataService";

const {initialState} = new InstructionsReducerStartState();

const instructionsReducer = createSlice({
    name: "instructionsReducer",
    initialState,
    reducers: {
        activateSendMode(state, action: PayloadAction<ActivateSendModePayload>) {
            const instructionMainData = action.payload;
            state.isSendMode = true;
            state.sendModeParams = {destinations: [], instructionMainData};
        },

        disableSendMode(state, action: PayloadAction<DisableSendModePayload>) {
            const instructionMainData = new InstructionMainDataService().instructionMainDataEmpty;
            state.isSendMode = false;
            state.sendModeParams = {destinations: [], instructionMainData};
        },

        addDestination(state) {
            const newDestination: DestinationType = {destinationName: 'Бульбуль', destinationId: uuidv4()};
            state.sendModeParams.destinations.push(newDestination);
        },

        deleteDestination(state, action: PayloadAction<DeleteDestinationPayload>) {
            state.sendModeParams.destinations.splice(action.payload.index, 1)
        },

        editInstructionText(state, action: PayloadAction<EditInstructionTextPayload>){
            state.sendModeParams.instructionMainData.instructionText = action.payload.instructionText
        },
    },
});

export const { activateSendMode, disableSendMode, addDestination, deleteDestination, editInstructionText} = instructionsReducer.actions;

export default instructionsReducer.reducer;

