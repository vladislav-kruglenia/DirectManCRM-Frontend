import {AccountPages} from "../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {ProjectStatus} from "./ClientAccount.enums";

export type StartStateType = {
    currentProjectIndex: number,
    viewedProjects: ProjectTabData[],
    indexMainLink: number,
    links: LinkClientAccountBody[]
}

export type ProjectTabData = {
    isProjectSelected: boolean,
    projectName: string,
    projectId: string,
    idProjectTab: string,
    projectStatus: ProjectStatus | "",
}

export type DeleteTabPayload = {
    projectId: string,
}

export type UpdateProjectMainDataPayload = {
    projectMainData:  ProjectMainData,
    currentProjectIndex: number,
    projectStatus: ProjectStatus | "",
}

export type UpdateProjectStatusPayload = {
    projectStatus: ProjectStatus | "",
    currentProjectIndex: number,
}



export type ProjectMainData = {
    projectName: string,
    projectId: string,
}


export type LinkClientAccountBody = {
    link: AccountPages,
    linkName: string
}