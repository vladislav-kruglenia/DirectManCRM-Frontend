import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ReactNode} from "react";

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
    itemIcon: ReactNode,
    editIndexMainLink: (index: number) => void,
}

