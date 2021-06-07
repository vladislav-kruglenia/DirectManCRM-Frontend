import React, {memo, useCallback} from "react";
import style from "./Account.module.scss";
import {AccountNavBarMemo} from "./Components/AccountNavbar/AccountNavbar";
import {AccountBodyMemo} from "./Components/AccountBody/AccountBody";
import {ProjectTabData} from "../../../../../Redux/Reducers/Account/Types/Account.types";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentProjectIndexSelector,
    getIndexMainLinkClientAccountSelector,
    getLinksClientAccountSelector,
    getProjectsViewedSelector
} from "../../../../../Redux/Reducers/Account/Account.selectors";
import {
    updateCurrentProjectIndex,
    updateIndexMainLink
} from "../../../../../Redux/Reducers/Account/Account.reducer";

export const Account = () => {
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


    return <div className={style.Account}>
        <AccountNavBarMemo
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={updateIndexMainLinkAction}
            updateCurrentProjectIndex={updateCurrentProjectIndexAction}
        />
        <AccountBodyMemo
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            indexMainLink={indexMainLink}
            linksClientAccount={linksClientAccount}
            updateIndexMainLinkAction={updateIndexMainLinkAction}
            updateCurrentProjectIndex={updateCurrentProjectIndexAction}
        />
    </div>
};

export const ClientAccountMemo = memo(Account);
