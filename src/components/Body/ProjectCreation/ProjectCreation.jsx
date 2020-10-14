import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import TariffPlans from "./TariffPlans/TariffPlans";
import ProjectEditing from "./ProjectEditing/ProjectEditing";
import style from './ProjectFormation.module.css'


let ProjectCreation = () => {
    return <div className={style.bodyContainer}>
        <h2>Формирование заказа</h2>
        <Switch>
            <Route exact path='/project-creation'
                   render={() => <Redirect to={'/project-creation/tariff-plans'}/>}/>
            <Route path='/project-creation/tariff-plans' render={()=><TariffPlans/>}/>
            <Route path='/project-creation/project-editing' render={()=><ProjectEditing/>}/>
        </Switch>
    </div>
};

export default ProjectCreation