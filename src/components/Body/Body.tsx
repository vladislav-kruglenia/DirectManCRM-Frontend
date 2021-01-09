import React from 'react';
import style from './Body.module.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectCreation from "./ProjectCreation/ProjectCreationСontainer";
import AdminPanel from "./AdminPanel/AdminPanel";
import {ProjectCreationEnum} from "../../AppGlobalTypes/TypesComponents";



let Body = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/admin"}/>}/>
            <Route path='/admin' render={()=><AdminPanel/>}/>
            <Route path={`/${ProjectCreationEnum.prCreation}`} render={()=><ProjectCreation type={ProjectCreationEnum.prCreation}/>}/>
            <Route path={`/${ProjectCreationEnum.editTariffsData}`} render={()=><ProjectCreation type={ProjectCreationEnum.editTariffsData}/>}/>
        </Switch>
    </div>
};

export default Body