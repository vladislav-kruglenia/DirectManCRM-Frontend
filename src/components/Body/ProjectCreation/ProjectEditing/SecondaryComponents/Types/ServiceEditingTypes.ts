import {
    changeServiceNameType,
    changeServicePriceType,
    deleteServiceType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type IdNumbersType = {
    idDirection: string,
    idTariff: string,
    idService: string
}

export type DisplayServiceDataPropsType = {
    serviceName: string | null,
    changeServiceName: changeServiceNameType,
    servicePrice: number,
    changeServicePrice: changeServicePriceType,
    deleteService: deleteServiceType,
    idNumbers: IdNumbersType
}

export type DisplayServiceNamePropsType = {
    serviceName: string | null,
    changeServiceName: changeServiceNameType,
    idNumbers: IdNumbersType,
    editModeStatus: boolean,
    changeEditModeStatus: (status: boolean) => void
}

export type DisplayServicePricePropsType = {
    servicePrice: number,
    changeServicePrice: changeServicePriceType,
    idNumbers: IdNumbersType
    editModeStatus: boolean,
    changeEditModeStatus: (status: boolean) => void
}

export type DeleteServicePropsType = {
    deleteService: deleteServiceType,
    idNumbers: IdNumbersType,
    changeEditModeStatus: (status: boolean) => void
}