import React from 'react';
import style from './Body.module.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectCreation from "./ProjectCreation/ProjectCreation";
import AdminPanel from "./AdminPanel/AdminPanel";


let Body = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/admin"}/>}/>
            <Route path='/admin' render={()=><AdminPanel/>}/>
            <Route path='/project-creation' render={()=><ProjectCreation/>}/>
        </Switch>
    </div>
};

export default Body