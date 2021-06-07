import React from 'react';
import style from './Body.module.css'
import LoginPage from "./Components/LoginPage/LoginPage";
import {Route, Switch} from "react-router-dom";
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