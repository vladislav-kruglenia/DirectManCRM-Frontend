import {ProjectMainData} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type ProjectsContainerProps = {
    title: string,
    projectsMainData: ProjectMainData[]
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}

export type ProjectMainInfoProps = {
    projectMainData: ProjectMainData,
    updateProjectMainData: (projectMainData: ProjectMainData) => void,
}