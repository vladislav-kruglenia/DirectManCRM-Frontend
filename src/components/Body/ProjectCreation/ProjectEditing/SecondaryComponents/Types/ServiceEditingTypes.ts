import {
    changeServiceNameType,
    changeServicePriceType, deleteServiceType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type IdNumbersType = {
    idDirection: string,
    idTariff: string,
    idService: string
}

export type DisplayServiceNamePropsType = {
    serviceName: string | null,
    changeServiceName: changeServiceNameType,
    idNumbers: IdNumbersType,
}

export type DisplayServicePricePropsType = {
    servicePrice: number,
    changeServicePrice: changeServicePriceType,
    idNumbers: IdNumbersType
}

export type DeleteServicePropsType = {
    deleteService: deleteServiceType,
    idNumbers: IdNumbersType
}