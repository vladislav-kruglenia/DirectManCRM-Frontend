import React from 'react';
import style from './Body.module.css'
import LoginPage from "../LoginPage/LoginPage";
import {Route, Switch} from "react-router-dom";

import BodyContainerUX from "./BodyContainerUX";


let BodyContainer = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route path='/login' render={()=><LoginPage/>}/>
        </Switch>
        <BodyContainerUX/>
    </div>
};

export default BodyContainer