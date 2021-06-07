import React from 'react';
import style from './Body.module.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectCreation from "./Components/ProjectCreation/ProjectCreationСontainer";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import {NavBarLinks} from "../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {FillOrderQuestions} from "./Components/FillOrderQuestions/FillOrderQuestions";
import {ProjectCreationEnum} from "../../../AppGlobal/AppGlobalTypes/TypesComponents";
import {EditingOrderQuestions} from "./Components/EditingOrderQuestions/EditingOrderQuestions";
import {Account} from "./Components/Account/Account";



let Body = () => {
    return <div className={style.bodyContainer}>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/admin"}/>}/>
            <Route path={NavBarLinks.admin} render={()=><AdminPanel/>}/>
            <Route path={NavBarLinks.prCreation} render={()=><ProjectCreation type={ProjectCreationEnum.prCreation}/>}/>
            <Route path={NavBarLinks.editTariffsData} render={()=><ProjectCreation type={ProjectCreationEnum.editTariffsData}/>}/>
            <Route path={NavBarLinks.FillOrderQuestions} render={()=><FillOrderQuestions/>}/>
            <Route path={NavBarLinks.EditingOrderQuestions} render={()=><EditingOrderQuestions/>}/>
            <Route path={NavBarLinks.Account} render={()=><Account/>}/>
        </Switch>
    </div>
};

export default Body