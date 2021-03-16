import {ProjectInfoForClientModel} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";

export type ProjectDataProps = {
    projectIdUrl: string,
}


export type QueryData = {
    getProjectInfoForClient: ProjectInfoForClientModel,
}

export type QueryVars = {
    projectId: string,
}