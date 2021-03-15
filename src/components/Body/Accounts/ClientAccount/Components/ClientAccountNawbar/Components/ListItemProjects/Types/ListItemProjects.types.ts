import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ReactNode, ReactNodeArray} from "react";

export type ListItemProjectsProps = {
    linkData: LinkClientAccountBody,
    indexMainLink: number,
    index: number,
    editIndexMainLink: (index: number) => void,
    currentProjectIndex: number,
    projectsViewed: ProjectTabData[],
    projectIcon: ReactNode,
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