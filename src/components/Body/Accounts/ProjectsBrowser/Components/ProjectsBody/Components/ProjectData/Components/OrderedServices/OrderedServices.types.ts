import {
    OrderedService,
    OrderedServices
} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";

export interface OrderedServicesProps extends OrderedServices{}

export type ServicesCheckboxesProps = {
    services: OrderedService[],
}

export type LinearProgressProps = {
    readyServicesPercentage: number,
}