import React from 'react';
import style from './Body.module.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectCreation from "./ProjectCreation/ProjectCreationСontainer";
import AdminPanel from "./AdminPanel/AdminPanel";
const projectCreation = "projectCreation";
const editTariffsData = "editTariffsData";


let Body = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/admin"}/>}/>
            <Route path='/admin' render={()=><AdminPanel/>}/>
            <Route path={`/${projectCreation}`} render={()=><ProjectCreation type={projectCreation}/>}/>
            <Route path={`/${editTariffsData}`} render={()=><ProjectCreation type={editTariffsData}/>}/>
        </Switch>
    </div>
};

export default Body