import {
    ProjectMainData,
    ProjectTabData
} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type ProjectsBrowserProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    updateCurrentProjectIndex: (index: number) => void,
}

export type ProjectsBodyProps = {
    projectIdUrl: string | null | undefined,
    currentProjectIndex: number,
    projectsViewed: ProjectTabData[],
    addTab: () => void,
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}