import {ProjectInfoForClientModel} from "../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";

export type ProjectDataProps = {
    projectIdUrl: string,
}


export type QueryData = {
    getProjectInfoForClient: ProjectInfoForClientModel,
}

export type QueryVars = {
    projectId: string,
}