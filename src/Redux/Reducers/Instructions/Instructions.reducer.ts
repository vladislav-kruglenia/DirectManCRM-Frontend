import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InstructionsReducerStartState} from "./StartState/StartState";
import {DeleteDestinationPayload, EditSendModeParamsPayload} from "./Types/Actions.types";
import {DestinationType} from "./StartState/StartState.types";
import { v4 as uuidv4 } from 'uuid';

const {initialState} = new InstructionsReducerStartState();

const instructionsReducer = createSlice({
    name: "instructionsReducer",
    initialState,
    reducers: {
        editSendMode(state, action: PayloadAction<boolean>){
            state.isSendMode = action.payload
        },
        editSendModeParams(state, action: PayloadAction<EditSendModeParamsPayload>){
            const {instructionId, instructionText} = action.payload;

            if(instructionText) state.sendModeParams.instructionText = instructionText;
            if(instructionId) state.sendModeParams.instructionId = instructionId;
        },

        addDestination(state){
            const newDestination: DestinationType = {destinationName: 'Бульбуль', destinationId: uuidv4()};
            state.sendModeParams.destinations.push(newDestination);
        },

        deleteDestination(state, action: PayloadAction<DeleteDestinationPayload>){
            state.sendModeParams.destinations.splice(action.payload.index, 1)
        },

    },
});

export const {editSendMode, editSendModeParams, addDestination, deleteDestination} = instructionsReducer.actions;

export default instructionsReducer.reducer;

