import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";

const getIsSendMode = (state: AppStateType) => state.instructions.isSendMode;
const getSendModeParams = (state: AppStateType) => state.instructions.sendModeParams;
const getDestinations = (state: AppStateType) => state.instructions.sendModeParams.destinations;


export const getIsSendModeSelector = createSelector(getIsSendMode, data => data);
export const getSendModeParamsSelector = createSelector(getSendModeParams, data => data);
export const getDestinationsSelector = createSelector(getDestinations, data => data);