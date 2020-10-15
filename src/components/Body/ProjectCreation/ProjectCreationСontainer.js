import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {getNamesDirections} from "./ProjectCreationSelectors";

let mapStateToProps = (state) => {
    return {
        namesDirections: getNamesDirections(state)
    }
};
let DispatchObject = {};

export default compose(
    connect(mapStateToProps, DispatchObject)
)(ProjectCreation)