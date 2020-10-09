import React from 'react';
import style from './Body.module.css'
import LoginPage from "./LoginPage/LoginPage";
import {Redirect, Route, Switch} from "react-router-dom";
import AdminPanelContainer from "./AdminPanel/AdminPanelContainer";


let Body = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/admin"}/>}/>
            <Route path='/admin' render={()=><AdminPanelContainer/>}/>
            <Route path='/login' render={()=><LoginPage/>}/>
        </Switch>
    </div>
};

export default Body