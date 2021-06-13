import {ProjectMainData} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {MainProjectData} from "../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";

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