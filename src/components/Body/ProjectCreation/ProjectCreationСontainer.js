import React, {useEffect} from "react";
import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getClientContacts,
    getNameProject,
    getNamesDirections,
    getNamesServicesDependingSelectedTariffs,
    getNamesTariffsDependingSelectedDirections, getUserId
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
    changeTariffStatus, deleteContact,
    deleteService, getTariffsInfoThunkCreator, saveOrderInfoThunkCreator
} from "../../../redux/projectCreationReducer";
import Preloader from "../../Common/Preloader/Preloader";

let mapStateToProps = (state) => {
    let dataLoaded = state.projectCreation.dataLoaded;
    if (dataLoaded) {
        return {
            userId: getUserId(state),
            dataLoaded: dataLoaded,
            nameProject: getNameProject(state),
            clientContacts: getClientContacts(state),
            directions: getNamesDirections(state),
            tariffsAndNamesDirections: getNamesTariffsDependingSelectedDirections(state),
            servicesAndNamesTariffs: getNamesServicesDependingSelectedTariffs(state),
        }
    } else {
        return {
            dataLoaded: dataLoaded,
            nameProject: getNameProject(state),
            clientContacts: getClientContacts(state),
        }
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
    deleteContact,
    getTariffsInfo: getTariffsInfoThunkCreator,
    saveOrderInfo: saveOrderInfoThunkCreator,
};

let ProjectCreationContainer = ({dataLoaded, ...props}) => {
    useEffect(()=>{
        if (!dataLoaded) {
            props.getTariffsInfo();
        }
    });
    if (!dataLoaded) {
        /*props.getTariffsInfo();*/
        return <Preloader/>;
    }
    return <ProjectCreation {...props}/>
};

export default compose(
    connect(mapStateToProps, dispatchObject)
)(ProjectCreationContainer)