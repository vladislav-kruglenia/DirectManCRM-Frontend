import {ProjectDates} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";

export interface DeadlineProps extends ProjectDates{
    deadline: string,
}