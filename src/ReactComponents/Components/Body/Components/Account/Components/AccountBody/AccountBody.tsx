import React, {FC, memo} from "react";
import style from "./AccountBody.module.scss";
import {Instructions} from "./Components/Instructions/Instructions";
import {Feedback} from "./Components/Feedback/Feedback";
import {Settings} from "./Components/Settings/Settings";
import {Redirect, Route, Switch} from "react-router";
import {AccountPages, NavBarLinks} from "../../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {ProjectsBrowserMemo} from "./Components/ProjectsBrowser/ProjectsBrowser";
import {ClientAccountBodyProps} from "../../Types/ClientAccountBodyTypes";
import {BreadcrumbsComponentMemo} from "./Components/Breadcrumbs/Breadcrumbs";
import ProjectCreation from "../../../ProjectCreation/ProjectCreationСontainer";
import {ProjectCreationEnum} from "../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export let AccountBody: FC<ClientAccountBodyProps> = (props) => {

    return <div className={style.ClientAccountBody}>
        <BreadcrumbsComponentMemo
            linkData={props.linksClientAccount[props.indexMainLink]}
            indexMainLink={props.indexMainLink}
            currentProjectName={props.projectsViewed[props.currentProjectIndex].projectName}
        />
        <Switch>
            <Route exact path={`${NavBarLinks.Account}`}
                   render={() => <Redirect to={`${AccountPages.Projects}`}/>}/>
            <Route path={`${AccountPages.Projects}`} render={() => (
                <ProjectsBrowserMemo
                    currentProjectIndex={props.currentProjectIndex}
                    projectsViewed={props.projectsViewed}
                    updateCurrentProjectIndex={index => props.updateCurrentProjectIndex(index)}
                />
            )}/>
            <Route path={`${AccountPages.Profile}`} render={() => <Settings/>}/>
            <Route path={`${AccountPages.Instructions}`} render={() => <Instructions/>}/>
            <Route path={`${AccountPages.Feedback}`} render={() => <Feedback/>}/>
            <Route path={`${AccountPages.NewProject}`} render={() => <ProjectCreation type={ProjectCreationEnum.prCreation}/>}/>
        </Switch>
    </div>
};

export const AccountBodyMemo = memo(AccountBody);

