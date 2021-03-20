import {
    ProjectMainData,
    ProjectTabData
} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ProjectStatus} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export type ProjectsBodyProps = {
    projectIdUrl: string | null | undefined,
    currentProjectIndex: number,
    projectsViewed: ProjectTabData[],
    addTab: () => void,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}