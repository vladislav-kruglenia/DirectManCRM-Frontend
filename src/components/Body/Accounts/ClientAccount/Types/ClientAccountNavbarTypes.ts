import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";

export type ClientAccountNavBarProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    indexMainLink: number,
    linksClientAccount: LinkClientAccountBody[]
    updateIndexMainLinkAction: (index: number) => void,
    updateCurrentProjectIndex: (index: number) => void,
}

