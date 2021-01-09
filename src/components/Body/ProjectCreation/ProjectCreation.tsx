import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import TariffPlans from "./TariffPlans/TariffPlans";
import ProjectEditing from "./ProjectEditing/ProjectEditing";
import style from './ProjectFormation.module.css'
import ChoiceDirection from "./ChoiceDirection/ChoiceDirection";
import {ProjectName} from "./ProjectEditing/ProjectName/ProjectName";
import {ClientContactsComponent} from "./ProjectEditing/ClientContacts/ClientContactsComponent";
import {PropsTypes} from "./Types/ProjectCreationTypes";


let ProjectCreation: FC<PropsTypes> = (props) => {
    return <div className={style.bodyContainer}>
        <h1>Формирование заказа</h1>
        <ProjectName
            nameProject = {props.nameProject}
            clientContacts = {props.clientContacts}
            changeNameProject = {props.changeNameProject}
        />
        <Switch>
            <Route exact path={`/${props.typeComponent}`}
                   render={() => <Redirect to={`/${props.typeComponent}/choice-direction`}/>}/>


            <Route path={`/${props.typeComponent}/choice-direction`} render={() => <ChoiceDirection
                changeDirectionStatus={props.changeDirectionStatus}
                typeURL={props.typeComponent}
                directions={props.directions}/>}/>


            <Route path={`/${props.typeComponent}/tariff-plans`} render={() => <TariffPlans
                changeTariffStatus={props.changeTariffStatus}
                typeURL={props.typeComponent}
                tariffsAndNamesDirections={props.tariffsAndNamesDirections}/>}/>


            <Route path={`/${props.typeComponent}/project-editing`} render={() => <ProjectEditing
                // functions
                addTariff={props.addTariff}
                addService={props.addService}
                changeTariffStatus={props.changeTariffStatus}
                deleteService={props.deleteService}
                changeServiceName={props.changeServiceName}
                changeTariffName={props.changeTariffName}
                changePaymentPackage={props.changePaymentPackage}
                changeServicePrice={props.changeServicePrice}
                changePacketPrice={props.changePacketPrice}
                changeDeadlineTariff={props.changeDeadlineTariff}
                changePaymentInFull={props.changePaymentInFull}
                saveOrderInfo={props.saveOrderInfo}
                editTariffsInfo={props.editTariffsInfo}

                // data
                typeComponent = {props.typeComponent}
                directionsAndTariffs = {props.directionsAndTariffs}
                nameProject = {props.nameProject}
                userId = {props.userId}
                servicesAndNamesTariffs={props.servicesAndNamesTariffs}/>}/>
        </Switch>
        <ClientContactsComponent
            changeClientData={props.changeClientData}
            addContact={props.addContact}
            deleteContact={props.deleteContact}
            clientContacts = {props.clientContacts}
        />
    </div>
};

export default ProjectCreation