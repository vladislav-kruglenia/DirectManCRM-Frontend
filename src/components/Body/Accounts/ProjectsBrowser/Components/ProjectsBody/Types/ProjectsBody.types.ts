import {
    ProjectMainData,
    ProjectTabData
} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";

export type ProjectsBodyProps = {
    projectIdUrl: string | null | undefined,
    currentProjectIndex: number,
    projectsViewed: ProjectTabData[],
    addTab: () => void,
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}