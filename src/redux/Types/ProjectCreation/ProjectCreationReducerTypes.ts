import {ServicesType, TariffsInfoType, TariffsOrderInfoType, TariffsType} from "../../../api/Types/ApiTypes";
import {
    ActionCreatorsType,
    AddContactAC, AddingTariffsDataAC,
    AddServiceAC,
    AddTariffAC,
    ChangeClientDataAC,
    ChangeDeadlineTariffAC,
    ChangeDirectionPropertiesACType,
    ChangeDirectionStatusAC,
    ChangeNameProjectAC,
    ChangePacketPriceAC,
    ChangePaymentInFullAC,
    ChangePaymentPackageAC,
    ChangePropertiesACType,
    ChangeServiceNameAC,
    ChangeServicePriceAC,
    ChangeServicePropertiesACType,
    ChangeTariffNameAC,
    ChangeTariffPropertiesACType,
    ChangeTariffStatusAC,
    DeleteContactAC,
    DeleteServiceAC, TariffDeleteAC, DeleteTariffsDataAC,
    IdNumbersType, IdDirectionAndTariffType
} from "./ActionCreators";
import {CommonThunkType} from "../CommonTypes";

export type StateType = {
    userId: string | null,
    dataLoaded: boolean,
    nameProject: string,
    clientContacts: Array<ClientContactType>,
    directionsAndTariffs: TariffsInfoType,

}

export type ClientContactType = {
    idClient: string,
    name: string | null,
    email: string | null,
    phoneNumber: string | null,
}

export type GetNewStateKeysType = "directions" | "tariffs" | "services"

export type NewStateElementType = {
    getNewState: (state: StateType, action: ChangePropertiesACType, elementStateKey: GetNewStateKeysType) => StateType
    directions: (state: StateType, action: ChangeDirectionPropertiesACType) => void,
    tariffs: (state: StateType, action: ChangeTariffPropertiesACType) => void,
    services: (state: StateType, action: ChangeServicePropertiesACType) => void,
}

export type StateLayersType = {
    getClientContactsLayer: (currentState: StateType) => Array<ClientContactType>,
    getDirectionLayer: (currentState: StateType) => TariffsInfoType,
    getTariffLayer: (currentState: StateType, indexDirection: number) => Array<TariffsType>,
    getServiceLayer: (currentState: StateType, indexDirection: number, indexTariff: number) => Array<ServicesType>,
}

export type CopyStateType = {
    copyStateClientContacts: (state: StateType) => StateType,
    copyStateDirections: (state: StateType) => StateType,
    copyStateTariffs: (state: StateType, indexDirection: number) => StateType,
    copyStateServices: (state: StateType, indexDirection: number, indexTariff: number) => StateType,
}

export type GetIndexType<A = any> = (state: StateType, action: A) => number

export type GetIndexesType = {
    indexDirection: number,
    indexTariff: number,
    indexService: number
}

export type IndexesType = {
    getIndexes: (state: StateType, action: any) => GetIndexesType,
    getIndexClientContacts: GetIndexType,
    getIndexDirection: GetIndexType,
    getIndexTariff: GetIndexType,
    getIndexService: GetIndexType,
}

export type changeDirectionStatusType = (propertyValue: boolean, idDirection: string) => ChangeDirectionStatusAC
export type changeTariffStatusType = (propertyValue: boolean, idTariff: string, idDirection: string) => ChangeTariffStatusAC
export type addTariffType = (idDirection: string) => AddTariffAC
export type addServiceType = (idDirection: string, idTariff: string) => AddServiceAC
export type deleteServiceType = (idNumbers: IdNumbersType) => DeleteServiceAC
export type deleteTariffType = (idNumbers: IdDirectionAndTariffType) => TariffDeleteAC
export type changeServiceNameType = (idNumbers: IdNumbersType, propertyValue: string) => ChangeServiceNameAC
export type changeTariffNameType = (idNumbers: IdNumbersType, propertyValue: string) => ChangeTariffNameAC
export type changePaymentPackageType = (propertyValue: boolean, idTariff: string, idDirection: string) => ChangePaymentPackageAC
export type changeServicePriceType = (idNumbers: IdNumbersType, propertyValue: number) => ChangeServicePriceAC
export type changePacketPriceType = (idNumbers: IdNumbersType, propertyValue: number) => ChangePacketPriceAC
export type changeDeadlineTariffType = (idNumbers: IdNumbersType, propertyValue: number) => ChangeDeadlineTariffAC
export type changePaymentInFullType = (idDirection: string, propertyValue: boolean) => ChangePaymentInFullAC
export type changeNameProjectType = (idNumbers: IdNumbersType | null, propertyValue: string) => ChangeNameProjectAC
export type changeClientDataType = (newClientData: ClientContactType) => ChangeClientDataAC
export type addContactType = () => AddContactAC
export type deleteContactType = (idClient: string) => DeleteContactAC
export type addingTariffsDataType = (data: TariffsInfoType) => AddingTariffsDataAC
export type deleteTariffsDataType = () => DeleteTariffsDataAC


export type ServiceDataType = {serviceName: string | null, servicePrice: number}


export type getTariffsInfoType = () => ThunkType
export type saveOrderInfoType = (orderData: TariffsOrderInfoType, nameProject: string, userId: string) => ThunkType
export type editTariffsInfoType = (directionsAndTariffs: TariffsInfoType | null) => ThunkType
export type changeServiceInfoType = (idNumbers: IdNumbersType, serviceData: ServiceDataType) => ThunkType

export type ThunkType = CommonThunkType<StateType, ActionCreatorsType>
//export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionCreatorsType>

