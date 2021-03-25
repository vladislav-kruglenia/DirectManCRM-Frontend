import React, {FC, memo} from "react";
import style from "./ClientAccountBody.module.scss";
import {Instructions} from "./Components/Instructions/Instructions";
import {Feedback} from "./Components/Feedback/Feedback";
import {Settings} from "./Components/Settings/Settings";
import {Redirect, Route, Switch} from "react-router";
import {ClientAccountPages, NavBarLinks} from "../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {ProjectsBrowserMemo} from "../../../ProjectsBrowser/ProjectsBrowser";
import {ClientAccountBodyProps} from "../../Types/ClientAccountBodyTypes";
import {BreadcrumbsComponentMemo} from "./Components/Breadcrumbs/Breadcrumbs";

export let ClientAccountBody: FC<ClientAccountBodyProps> = (props) => {

    return <div className={style.ClientAccountBody}>
        <BreadcrumbsComponentMemo
            linkData={props.linksClientAccount[props.indexMainLink]}
            indexMainLink={props.indexMainLink}
            currentProjectName={props.projectsViewed[props.currentProjectIndex].projectName}
        />
        <Switch>
            <Route exact path={`${NavBarLinks.ClientAccount}`}
                   render={() => <Redirect to={`${ClientAccountPages.Projects}`}/>}/>
            <Route path={`${ClientAccountPages.Projects}`} render={() => <ProjectsBrowserMemo
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

export const ClientAccountBodyMemo = memo(ClientAccountBody);

