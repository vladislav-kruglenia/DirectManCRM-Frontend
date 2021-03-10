import React, {FC} from "react";
import style from "./ClientAccountBody.module.scss";
import {Instructions} from "./Components/Instructions/Instructions";
import {Feedback} from "./Components/Feedback/Feedback";
import {Settings} from "./Components/Settings/Settings";
import {Redirect, Route, Switch} from "react-router";
import {ClientAccountPages, NavBarLinks} from "../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {ProjectsBrowser} from "../../../ProjectsBrowser/ProjectsBrowser";
import {ClientAccountBodyProps} from "../../Types/ClientAccountBodyTypes";
import {BreadcrumbsComponent} from "./Components/Breadcrumbs/Breadcrumbs";

export let ClientAccountBody: FC<ClientAccountBodyProps> = (props) => {

    return <div className={style.ClientAccountBody}>
        <BreadcrumbsComponent
            linkData={props.linksClientAccount[props.indexMainLink]}
            indexMainLink={props.indexMainLink}
            currentProjectName={props.projectsViewed[props.currentProjectIndex].projectName}
        />
        <Switch>
            <Route exact path={`${NavBarLinks.ClientAccount}`}
                   render={() => <Redirect to={`${ClientAccountPages.Projects}`}/>}/>
            <Route path={`${ClientAccountPages.Projects}`} render={() => <ProjectsBrowser
                currentProjectIndex={props.currentProjectIndex}
                projectsViewed={props.projectsViewed}
                updateCurrentProjectIndex={index => props.updateCurrentProjectIndex(index)}
            />}/>
            <Route path={`${ClientAccountPages.Settings}`} render={() => <Settings/>}/>
            <Route path={`${ClientAccountPages.Instructions}`} render={() => <Instructions/>}/>
            <Route path={`${ClientAccountPages.Feedback}`} render={() => <Feedback/>}/>
        </Switch>
    </div>
};

