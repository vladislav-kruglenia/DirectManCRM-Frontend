import React, {FC} from "react";
import ProjectCreation from "./ProjectCreation";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getClientContacts,
    getDirectionsAndTariffs,
    getNameProject,
    getNamesDirections,
    getNamesServicesDependingSelectedTariffs,
    getNamesTariffsDependingSelectedDirections,
    getUserId
} from "./ProjectCreationSelectors";
import {AppStateType} from "../../../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {
    DispatchPropsType,
    MapStateProps,
    OwnProps,
    ProjectCreationContainerProps
} from "./Types/ProjectCreationСontainerTypes";
import {
    addContact,
    addService,
    addTariff,
    changeClientData,
    changeDeadlineTariff,
    changeDirectionStatus,
    changeNameProject,
    changePacketPrice,
    changePaymentInFull,
    changePaymentPackage,
    changeServiceInfo,
    changeServiceName,
    changeServicePrice,
    changeTariffName,
    changeTariffStatus,
    deleteContact,
    deleteService,
    editTariffsInfoThunkCreator,
    getTariffsInfoThunkCreator,
    saveOrderInfoThunkCreator
} from "../../../../../Redux/Reducers/ProjectCreation/ProjectCreation.reducer.immer";

const mapStateToProps = (state: AppStateType, props: OwnProps): MapStateProps => {
    let dataLoaded = state.projectCreation.dataLoaded;
    if (dataLoaded) {


        return {
            userId: getUserId(state),
            dataLoaded: dataLoaded,
            nameProject: getNameProject(state),
            clientContacts: getClientContacts(state),
            directions: getNamesDirections(state),
            // @ts-ignore Todo: Type A is missing the following properties from type 'TariffsPlansType'
            tariffsAndNamesDirections: getNamesTariffsDependingSelectedDirections(state),

            // @ts-ignore
            servicesAndNamesTariffs: getNamesServicesDependingSelectedTariffs(state),
            typeComponent: props.type,
            directionsAndTariffs: props.type === "editTariffsData" ? getDirectionsAndTariffs(state) : null,
        }
    } else {
        return {
            dataLoaded: dataLoaded,
            nameProject: getNameProject(state),
            clientContacts: getClientContacts(state),
        }
    }
};
const dispatchObject: DispatchPropsType = {
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
    editTariffsInfo: editTariffsInfoThunkCreator,
    changeServiceInfo: changeServiceInfo
};

const ProjectCreationContainer: FC<ProjectCreationContainerProps> = ({...props}) => {
    let dataLoaded = props.dataLoaded as boolean;
    /*useEffect(()=>{
        if (!dataLoaded) {
            props.getTariffsInfo();
        }
    });*/
    if (!dataLoaded) {
        props.getTariffsInfo();
        return <div>Загрузка...</div>;
    }
    // @ts-ignore
    return <ProjectCreation {...props}/>
};

export default compose(
    // @ts-ignore
    connect<MapStateProps, DispatchPropsType, OwnProps, AppStateType>(mapStateToProps, dispatchObject))(ProjectCreationContainer)