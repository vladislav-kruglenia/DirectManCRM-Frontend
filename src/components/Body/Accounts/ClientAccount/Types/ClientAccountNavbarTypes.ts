import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type ClientAccountNavBarProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    indexMainLink: number,
    linksClientAccount: LinkClientAccountBody[]
    updateIndexMainLinkAction: (index: number) => void,
    updateCurrentProjectIndex: (index: number) => void,
}

export type ListItemComponentProps = {
    index: number,
    link: string,
    linkText : string,
    indexMainLink: number,
    editIndexMainLink: (index: number) => void,
}

