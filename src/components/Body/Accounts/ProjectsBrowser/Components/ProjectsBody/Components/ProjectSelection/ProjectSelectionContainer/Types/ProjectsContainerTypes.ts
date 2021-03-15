import {ProjectMainData} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {MainProjectData} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";

export type ProjectsContainerProps = {
    title: string,
    projectsMainData: MainProjectData[]
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}

export type ProjectMainInfoProps = {
    projectMainData: MainProjectData,
    updateProjectMainData: (projectMainData: ProjectMainData) => void,
}