import {ProjectMainData} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {MainProjectData} from "../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";
import {MainProjectDataKeys} from "../Types/ProjectSelection.types";

export type ProjectsContainerProps = {
    title: string,
    currentProjectIndex: number,
    projectsMainData: MainProjectData[],
    projectType: MainProjectDataKeys,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}

