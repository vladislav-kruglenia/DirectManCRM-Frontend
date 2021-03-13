import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type ClientAccountBodyProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    indexMainLink: number,
    linksClientAccount: LinkClientAccountBody[]
    updateIndexMainLinkAction: (index: number) => void,
    updateCurrentProjectIndex: (index: number) => void,
}
