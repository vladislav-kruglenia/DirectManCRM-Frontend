import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getNamesDirections,
    getNamesServicesDependingSelectedTariffs,
    getNamesTariffsDependingSelectedDirections
} from "./ProjectCreationSelectors";
import {
    addService,
    addTariff,
    changeDirectionStatus, changePaymentPackage, changeServiceName, changeTariffName,
    changeTariffStatus, deleteService
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
    changeTariffStatus,
    addTariff,
    addService,
    deleteService,
    changeServiceName,
    changeTariffName,
    changePaymentPackage,
};

export default compose(
    connect(mapStateToProps, dispatchObject)
)(ProjectCreation)