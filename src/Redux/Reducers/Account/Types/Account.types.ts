import {AccountPages} from "../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {ProjectStatus} from "./Account.enums";

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
    textMainForm: string,
    projectStatus: ProjectStatus | "",
    response: ResponseComment,

}



export type ProjectMainData = {
    projectName: string,
    projectId: string,
}


export type LinkClientAccountBody = {
    link: AccountPages,
    linkName: string
}

export type ResponseComment = {
    isResponse: boolean,
    commentDestination: string,
}