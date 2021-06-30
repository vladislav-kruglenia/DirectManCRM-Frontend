import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";

const getIsSendMode = (state: AppStateType) => state.instructions.isSendMode;
const getDestinations = (state: AppStateType) => state.instructions.sendModeParams.destinations;
const getInstructionMainData = (state: AppStateType) => state.instructions.sendModeParams.instructionMainData;


export const getIsSendModeSelector = createSelector(getIsSendMode, data => data);
export const getDestinationsSelector = createSelector(getDestinations, data => data);
export const getInstructionMainDataSelector = createSelector(getInstructionMainData, data => data);
