import React, {memo, useCallback} from "react";
import style from "./ClientAccount.module.scss";
import {ClientAccountNavBarMemo} from "./Components/ClientAccountNawbar/ClientAccountNavbar";
import {ClientAccountBodyMemo} from "./Components/ClientAccountBody/ClientAccountBody";
import {ProjectTabData} from "../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentProjectIndexSelector,
    getIndexMainLinkClientAccountSelector,
    getLinksClientAccountSelector,
    getProjectsViewedSelector
} from "../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";
import {
    updateCurrentProjectIndex,
    updateIndexMainLink
} from "../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer";

export let ClientAccount = () => {
    const projectsViewed: ProjectTabData[] = useSelector(getProjectsViewedSelector);
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);
    const indexMainLink = useSelector(getIndexMainLinkClientAccountSelector);
    const linksClientAccount = useSelector(getLinksClientAccountSelector);

    const dispatch = useDispatch();
    const updateCurrentProjectIndexAction = useCallback((index: number) => {
        dispatch(updateCurrentProjectIndex(index))
    },[dispatch]);
    const updateIndexMainLinkAction = useCallback((index: number) => {
        dispatch(updateIndexMainLink(index))
    }, [dispatch]);


    return <div className={style.ClientAccount}>
        <ClientAccountNavBarMemo
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={updateIndexMainLinkAction}
            updateCurrentProjectIndex={updateCurrentProjectIndexAction}
        />
        <ClientAccountBodyMemo
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={updateIndexMainLinkAction}
            updateCurrentProjectIndex={updateCurrentProjectIndexAction}
        />
    </div>
};

export const ClientAccountMemo = memo(ClientAccount);
