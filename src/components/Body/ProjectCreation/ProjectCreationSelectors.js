import {createSelector} from "reselect";

let getNamesDirectionsSelector = (state) => {
    return state.projectCreation
};

export let getNamesDirections = createSelector(getNamesDirectionsSelector, (directions) => {
    return directions.map(d => d.nameDirection);
});