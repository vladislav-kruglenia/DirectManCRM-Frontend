import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import TariffPlans from "./TariffPlans/TariffPlans";
import ProjectEditing from "./ProjectEditing/ProjectEditing";
import style from './ProjectFormation.module.css'
import ChoiceDirection from "./ChoiceDirection/ChoiceDirection";


let ProjectCreation = (props) => {
    return <div className={style.bodyContainer}>
        <h1>Формирование заказа</h1>
        <Switch>
            <Route exact path='/project-creation'
                   render={() => <Redirect to={'/project-creation/choice-direction'}/>}/>
            <Route path='/project-creation/choice-direction' render={()=><ChoiceDirection
                changeDirectionStatus={props.changeDirectionStatus}
                directions={props.directions}/>}/>
            <Route path='/project-creation/tariff-plans' render={()=><TariffPlans
                changeTariffStatus={props.changeTariffStatus}
                tariffsAndNamesDirections={props.tariffsAndNamesDirections}/>}/>
            <Route path='/project-creation/project-editing' render={()=><ProjectEditing
                addTariff={props.addTariff}
                addService={props.addService}
                changeTariffStatus={props.changeTariffStatus}
                deleteService={props.deleteService}
                changeServiceName={props.changeServiceName}
                changeTariffName={props.changeTariffName}
                changePaymentPackage={props.changePaymentPackage}
                changeServicePrice={props.changeServicePrice}
                servicesAndNamesTariffs={props.servicesAndNamesTariffs}/>}/>
        </Switch>
    </div>
};

export default ProjectCreation