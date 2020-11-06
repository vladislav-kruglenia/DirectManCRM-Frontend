import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getClientContacts,
    getNameProject,
    getNamesDirections,
    getNamesServicesDependingSelectedTariffs,
    getNamesTariffsDependingSelectedDirections
} from "./ProjectCreationSelectors";
import {
    addContact,
    addService,
    addTariff, changeClientData, changeDeadlineTariff,
    changeDirectionStatus, changeNameProject,
    changePacketPrice, changePaymentInFull,
    changePaymentPackage,
    changeServiceName,
    changeServicePrice,
    changeTariffName,
    changeTariffStatus,
    deleteService
} from "../../../redux/projectCreationReducer";

let mapStateToProps = (state) => {
    return {
        nameProject: getNameProject(state),
        clientContacts: getClientContacts(state),
        directions: getNamesDirections(state),
        tariffsAndNamesDirections: getNamesTariffsDependingSelectedDirections(state),
        servicesAndNamesTariffs: getNamesServicesDependingSelectedTariffs(state),
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
    changeServicePrice,
    changePacketPrice,
    changeDeadlineTariff,
    changePaymentInFull,
    changeNameProject,
    changeClientData,
    addContact,
};

export default compose(
    connect(mapStateToProps, dispatchObject)
)(ProjectCreation)