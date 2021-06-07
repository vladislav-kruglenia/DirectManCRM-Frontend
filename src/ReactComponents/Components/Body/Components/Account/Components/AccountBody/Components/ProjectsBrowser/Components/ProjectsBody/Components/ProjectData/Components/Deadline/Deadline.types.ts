import {ProjectDates} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";

export interface DeadlineProps extends ProjectDates{
    deadline: string,
}