import {ProjectCreationEnum} from "../../../../AppGlobalTypes/TypesComponents";
import {
    addContactType,
    addServiceType,
    addTariffType,
    changeClientDataType,
    changeDeadlineTariffType,
    changeDirectionStatusType,
    changeNameProjectType,
    changePacketPriceType,
    changePaymentInFullType,
    changePaymentPackageType,
    changeServiceNameType,
    changeServicePriceType,
    changeTariffNameType,
    changeTariffStatusType,
    ClientContactType,
    deleteContactType,
    deleteServiceType,
    editTariffsInfoType,
    getTariffsInfoType,
    saveOrderInfoType
} from "../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {TariffsInfoType, TariffsOrderInfoType} from "../../../../api/Types/ApiTypes";
import {GetDirectionForDirection} from "./ProjectCreationSelectorsTypes";

export type ProjectCreationContainerProps = MapStateProps & DispatchPropsType & OwnProps

export type MapStateProps = GrandStateProps | MiniStateProps

export type GrandStateProps = {
    userId: string | null,
    dataLoaded: boolean,
    nameProject: string,
    clientContacts: Array<ClientContactType>,
    directions: Array<GetDirectionForDirection>,
    tariffsAndNamesDirections: Array<TariffsPlansType>/*DirectionOrderType<Array<GetTariffsForTariffs>>*/,
    servicesAndNamesTariffs: TariffsOrderInfoType,
    typeComponent: ProjectCreationEnum,
    directionsAndTariffs: TariffsInfoType | null,
}

export type MiniStateProps = {
    dataLoaded: boolean,
    nameProject: string,
    clientContacts: Array<ClientContactType>,
}

export type OwnProps = {
    type: ProjectCreationEnum
}

export type TariffsPlansType = {
    nameDirection: string,
    idDirection: string,
    selected: boolean,
    paymentInFull: boolean,
    directionTotalPrice: number,
    namesTariffs: Array<TariffName>
}

export type TariffName = {
    tariffName: string | null,
    tariffStatus: boolean,
    tariffId: string
}

export type DispatchPropsType = {
    changeDirectionStatus: changeDirectionStatusType
    changeTariffStatus: changeTariffStatusType
    addTariff: addTariffType
    addService: addServiceType
    deleteService: deleteServiceType,
    changeServiceName: changeServiceNameType,
    changeTariffName: changeTariffNameType,
    changePaymentPackage: changePaymentPackageType,
    changeServicePrice: changeServicePriceType,
    changePacketPrice: changePacketPriceType,
    changeDeadlineTariff: changeDeadlineTariffType,
    changePaymentInFull: changePaymentInFullType,
    changeNameProject: changeNameProjectType,
    changeClientData: changeClientDataType,
    addContact: addContactType,
    deleteContact: deleteContactType,
    getTariffsInfo: getTariffsInfoType,
    saveOrderInfo: saveOrderInfoType,
    editTariffsInfo: editTariffsInfoType,
}


