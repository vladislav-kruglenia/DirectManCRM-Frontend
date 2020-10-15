import {createSelector} from "reselect";

let getNamesDirectionsSelector = (state) => {
    return state.projectCreation
};

export let getNamesDirections = createSelector(getNamesDirectionsSelector, (directions) => {
    debugger
    return directions.map(d => d.nameDirection);
});