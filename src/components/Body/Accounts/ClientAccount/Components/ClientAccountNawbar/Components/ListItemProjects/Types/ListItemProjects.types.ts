import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";
import {ReactNodeArray} from "react";

export type ListItemProjectsProps = {
    linkData: LinkClientAccountBody,
    indexMainLink: number,
    index: number,
    editIndexMainLink: (index: number) => void,
    currentProjectIndex: number,
    projectsViewed: ProjectTabData[],
    projectsTabs: ReactNodeArray,
}
export type ListItemProjectProps = {
    project: ProjectTabData,
    index: number,
    currentProjectIndex: number,
    link: string,
    updateCurrentProjectIndex: (index: number) => void,
    updateIndexMainLinkToProjects: () => void,
}