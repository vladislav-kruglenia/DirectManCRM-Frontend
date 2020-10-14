import React from 'react';
import style from './Body.module.css'
import LoginPage from "../LoginPage/LoginPage";
import {Route, Switch} from "react-router-dom";

//import BodyContainerUX from "./BodyContainerUX";
import Body from "./Body";


let BodyContainer = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route path='/login' render={()=><LoginPage/>}/>
        </Switch>
        <Body/>
    </div>
};

export default BodyContainer