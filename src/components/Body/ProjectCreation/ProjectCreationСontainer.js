import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getNamesDirections,
    getNamesTariffsDependingSelectedDirections} from "./ProjectCreationSelectors";
import {changeDirectionStatus} from "../../../redux/projectCreationReducer";

let mapStateToProps = (state) => {
    return {
        directions: getNamesDirections(state),
        tariffsAndNamesDirections: getNamesTariffsDependingSelectedDirections(state)
    }
};
let dispatchObject = {
    changeDirectionStatus
};

export default compose(
    connect(mapStateToProps, dispatchObject)
)(ProjectCreation)