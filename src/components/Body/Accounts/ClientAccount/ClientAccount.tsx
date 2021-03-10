import React from "react";
import style from "./ClientAccount.module.scss";
import {ClientAccountNavBar} from "./Components/ClientAccountNawbar/ClientAccountNavbar";
import {ClientAccountBody} from "./Components/ClientAccountBody/ClientAccountBody";
import {ProjectTabData} from "../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentProjectIndexSelector, getIndexMainLinkClientAccountSelector, getLinksClientAccountSelector,
    getProjectsViewedSelector
} from "../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";
import {updateCurrentProjectIndex, updateIndexMainLink} from "../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer";

export let ClientAccount = () => {
    const projectsViewed: ProjectTabData[] = useSelector(getProjectsViewedSelector);
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);
    const indexMainLink = useSelector(getIndexMainLinkClientAccountSelector);
    const linksClientAccount = useSelector(getLinksClientAccountSelector);

    const dispatch = useDispatch();
    const updateCurrentProjectIndexAction = (index: number) => {
        dispatch(updateCurrentProjectIndex(index))
    };
    const updateIndexMainLinkAction = (index: number) => dispatch(updateIndexMainLink(index));


    return <div className={style.ClientAccount}>
        <ClientAccountNavBar
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={index => updateIndexMainLinkAction(index)}
            updateCurrentProjectIndex={index => updateCurrentProjectIndexAction(index)}
        />
        <ClientAccountBody
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={index => updateIndexMainLinkAction(index)}
            updateCurrentProjectIndex={index => updateCurrentProjectIndexAction(index)}
        />
    </div>
};

