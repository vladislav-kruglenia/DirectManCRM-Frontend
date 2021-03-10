import {ClientAccountPages} from "../../../../AppGlobal/AppGlobalTypes/LinksComponents";

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
}

export type DeleteTabPayload = {
    projectId: string,
}

export type UpdateProjectMainDataPayload = {
    projectMainData:  ProjectMainData,
    currentProjectIndex: number,
}

export type ProjectMainData = {
    projectName: string,
    projectId: string,
}


export type LinkClientAccountBody = {
    link: ClientAccountPages,
    linkName: string
}