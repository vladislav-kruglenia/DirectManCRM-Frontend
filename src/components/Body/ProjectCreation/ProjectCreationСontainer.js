import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getNamesDirections,
    getNamesServicesDependingSelectedTariffs,
    getNamesTariffsDependingSelectedDirections
} from "./ProjectCreationSelectors";
import {
    changeDirectionStatus,
    changeTariffStatus
} from "../../../redux/projectCreationReducer";

let mapStateToProps = (state) => {
    return {
        directions: getNamesDirections(state),
        tariffsAndNamesDirections: getNamesTariffsDependingSelectedDirections(state),
        servicesAndNamesTariffs: getNamesServicesDependingSelectedTariffs(state)
    }
};
let dispatchObject = {
    changeDirectionStatus,
    changeTariffStatus
};

export default compose(
    connect(mapStateToProps, dispatchObject)
)(ProjectCreation)