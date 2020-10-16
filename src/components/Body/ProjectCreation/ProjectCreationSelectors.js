import {createSelector} from "reselect";

let getNamesDirectionsSelector = (state) => {
    return state.projectCreation.directionsAndTariffs
};

export let getNamesDirections = createSelector(getNamesDirectionsSelector, (directions) => {
    return directions.map(d => (
        {
            nameDirection: d.nameDirection,
            selected: d.selected
        }
    ));
});