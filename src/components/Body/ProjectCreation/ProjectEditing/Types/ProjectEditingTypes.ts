import {
    addServiceType,
    addTariffType,
    changeDeadlineTariffType,
    changePacketPriceType,
    changePaymentInFullType,
    changePaymentPackageType, changeServiceInfoType,
    changeServiceNameType,
    changeServicePriceType,
    changeTariffNameType,
    changeTariffStatusType,
    deleteServiceType,
    editTariffsInfoType,
    saveOrderInfoType
} from "../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {ProjectCreationEnum} from "../../../../../AppGlobalTypes/TypesComponents";
import {ServicesType, TariffsInfoType, TariffsOrderInfoType, TariffsOrderType} from "../../../../../api/Types/ApiTypes";

export type ProjectEditingPropsType = {
    // functions
    addTariff: addTariffType,
    addService: addServiceType,
    changeTariffStatus: changeTariffStatusType,
    deleteService: deleteServiceType,
    changeServiceName: changeServiceNameType,
    changeTariffName: changeTariffNameType,
    changePaymentPackage: changePaymentPackageType,
    changeServicePrice: changeServicePriceType,
    changePacketPrice: changePacketPriceType,
    changeDeadlineTariff: changeDeadlineTariffType,
    changePaymentInFull: changePaymentInFullType,
    saveOrderInfo: saveOrderInfoType,
    editTariffsInfo: editTariffsInfoType,
    changeServiceInfo: changeServiceInfoType

    // data
    typeComponent: ProjectCreationEnum
    directionsAndTariffs: TariffsInfoType | null
    nameProject: string
    userId: string | null
    servicesAndNamesTariffs: TariffsOrderInfoType
}

export type DirectionEditingPropsType = {
    // values
    key: string
    namesTariffs: Array<TariffsOrderType>
    nameDirection: string
    idDirection: string
    directionTotalPrice: number | undefined
    paymentInFull: boolean
    typeComponent: ProjectCreationEnum

    // functions
    addTariff: addTariffType,
    addService: addServiceType,
    changeTariffStatus: changeTariffStatusType,
    deleteService: deleteServiceType,
    changeServiceName: changeServiceNameType,
    changeTariffName: changeTariffNameType,
    changePaymentPackage: changePaymentPackageType,
    changeServicePrice: changeServicePriceType,
    changePacketPrice: changePacketPriceType,
    changeDeadlineTariff: changeDeadlineTariffType,
    changePaymentInFull: changePaymentInFullType,
    changeServiceInfo: changeServiceInfoType
}

export type TariffEditingPropsType = {
    // values
    key: string,
    idDirection: string,
    services: Array<ServicesType>,
    tariffId: string,
    tariffName: string,
    totalPriceTariff: number,
    deadlineTariff: number,
    paymentPackage: boolean,

    // functions
    addService: addServiceType,
    changeTariffStatus: changeTariffStatusType,
    deleteService: deleteServiceType,
    changeServiceName: changeServiceNameType,
    changeTariffName: changeTariffNameType,
    changePaymentPackage: changePaymentPackageType,
    changeServicePrice: changeServicePriceType,
    changePacketPrice: changePacketPriceType,
    changeDeadlineTariff: changeDeadlineTariffType,
    changeServiceInfo: changeServiceInfoType
}

export type ServiceEditingPropsType = {
    // values
    key: string,
    serviceName: string | null,
    serviceId: string,
    servicePrice: number,
    idDirection: string,
    tariffId: string,

    // functions
    deleteService: deleteServiceType,
    changeServiceName: changeServiceNameType,
    changeServicePrice: changeServicePriceType,
    changeServiceInfo: changeServiceInfoType
}