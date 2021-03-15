import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {createSelector} from "reselect";
import {ProjectTabData} from "./Types/ClientAccountReducer.types";

const getProjectsViewed = (state: AppStateType) => state.clientAccount.viewedProjects;
const getCurrentProjectIndex = (state: AppStateType) => state.clientAccount.currentProjectIndex;
const getLinksClientAccount = (state: AppStateType) => state.clientAccount.links;
const getIndexMainLinkClientAccount = (state: AppStateType) => state.clientAccount.indexMainLink;


export const getProjectsViewedSelector = createSelector(getProjectsViewed, data => data);
export const getSelectedProjectsSelector = createSelector(
    getProjectsViewed,
    (data: ProjectTabData[]):Array<ProjectTabData | null> => data.map((project: ProjectTabData) => {
    if (project.isProjectSelected) return project;
    return null
}));


export const getCurrentProjectIndexSelector = createSelector(getCurrentProjectIndex, data => data);
export const getLinksClientAccountSelector = createSelector(getLinksClientAccount, data => data);
export const getIndexMainLinkClientAccountSelector = createSelector(getIndexMainLinkClientAccount, data => data);