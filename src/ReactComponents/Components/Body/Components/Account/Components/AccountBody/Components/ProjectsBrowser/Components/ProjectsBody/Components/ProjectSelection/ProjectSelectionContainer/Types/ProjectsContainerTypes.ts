import {ProjectMainData} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {MainProjectData} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/ClientAccount.enums";

export type ProjectsContainerProps = {
    title: string,
    currentProjectIndex: number,
    projectsMainData: MainProjectData[],
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}

export type ProjectMainInfoProps = {
    currentProjectIndex: number,
    projectMainData: MainProjectData,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}