import {ProjectDates} from "../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";

export interface DeadlineProps extends ProjectDates{
    deadline: string,
}