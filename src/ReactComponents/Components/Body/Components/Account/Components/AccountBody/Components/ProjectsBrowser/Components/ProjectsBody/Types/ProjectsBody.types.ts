import {ProjectMainData} from "../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {ProjectStatus} from "../../../../../../../../../../../../Redux/Reducers/Account/Types/ClientAccount.enums";

export type ProjectsBodyProps = {
    projectIdUrl: string | null | undefined,
    currentProjectIndex: number,
    // projectsViewed: ProjectTabData[],
    addTab: () => void,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}