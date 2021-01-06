import {ServicesType, TariffsInfoType, TariffsType} from "../../../api/Types/ApiTypes";
import {ThunkAction} from "redux-thunk";
import {
    ActionCreatorsType,
    ChangeDirectionPropertiesACType,
    ChangePropertiesACType,
    ChangeServicePropertiesACType,
    ChangeTariffPropertiesACType
} from "./ActionCreators";

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

export type GetNewStateType = (state: StateType, action: ChangePropertiesACType, elementStateKey: GetNewStateKeysType) => StateType

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

export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionCreatorsType>

