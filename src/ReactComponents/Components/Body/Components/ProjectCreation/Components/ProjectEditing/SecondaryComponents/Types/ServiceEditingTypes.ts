import {
    changeServiceInfoType,
    changeServiceNameType,
    changeServicePriceType,
    deleteServiceType, ServiceDataType
} from "../../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";

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
    changeServiceInfo: changeServiceInfoType
    idNumbers: IdNumbersType
}


export type DeleteServicePropsType = {
    deleteService: deleteServiceType,
    idNumbers: IdNumbersType,
    changeEditModeStatus: (status: boolean) => void
}

export type ServiceDataPropsType = {
    serviceName: string | null
    servicePrice: number
}

export type EditServiceFormPropsType = {
    idNumbers: IdNumbersType
    changeServiceInfo: changeServiceInfoType
    serviceData: ServiceDataType
    setEditMode: (status: boolean) => void
}

