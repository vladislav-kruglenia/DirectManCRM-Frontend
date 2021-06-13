import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";
import {ProjectTabData} from "./Types/Account.types";

const getProjectsViewed = (state: AppStateType) => state.account.viewedProjects;
const getCurrentProjectIndex = (state: AppStateType) => state.account.currentProjectIndex;
const getLinksClientAccount = (state: AppStateType) => state.account.links;
const getIndexMainLinkClientAccount = (state: AppStateType) => state.account.indexMainLink;



export const getProjectsViewedSelector = createSelector(getProjectsViewed, data => data);
export const getSelectedProjectsSelector = createSelector(
    getProjectsViewed,
    (data: ProjectTabData[]):Array<ProjectTabData | null> => data.map((project: ProjectTabData) => {
    if (project.isProjectSelected) return project;
    return null
}));

const getProjectCommentsResponse = (state: AppStateType) => {
    const {viewedProjects, currentProjectIndex} = state.account;
    return viewedProjects[currentProjectIndex].response
};

const getTextMainForm = (state: AppStateType) => {
    const {viewedProjects, currentProjectIndex} = state.account;
    return viewedProjects[currentProjectIndex].textMainForm
};


export const getCurrentProjectIndexSelector = createSelector(getCurrentProjectIndex, data => data);
export const getLinksClientAccountSelector = createSelector(getLinksClientAccount, data => data);
export const getIndexMainLinkClientAccountSelector = createSelector(getIndexMainLinkClientAccount, data => data);
export const getProjectCommentsResponseSelector = createSelector(getProjectCommentsResponse, data => data);
export const getTextMainFormSelector = createSelector(getTextMainForm, data => data);
