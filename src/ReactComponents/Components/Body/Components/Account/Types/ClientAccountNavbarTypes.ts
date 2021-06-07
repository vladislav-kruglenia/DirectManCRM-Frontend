import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../../Redux/Reducers/Account/Types/Account.types";

export type ClientAccountNavBarProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    indexMainLink: number,
    linksClientAccount: LinkClientAccountBody[]
    updateIndexMainLinkAction: (index: number) => void,
    updateCurrentProjectIndex: (index: number) => void,
}

