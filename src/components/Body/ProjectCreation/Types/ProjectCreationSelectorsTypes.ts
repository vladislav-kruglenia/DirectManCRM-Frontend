import {ServicesType, TariffsOrderType} from "../../../../api/Types/ApiTypes";


export type GetDirectionPrice = {
    items: Array<TariffsOrderType>,
    param: 'totalPrice'
}

export type GetTariffPrice = {
    items: Array<ServicesType>,
    param: 'servicePrice'
}

export type GetTotalPriceType = GetDirectionPrice | GetTariffPrice

export type GetTariffsForTariffs = {
    tariffName: string | null,
    tariffStatus: boolean,
    tariffId: string
}

export type GetDirectionForDirection = {
    nameDirection: string,
    selected: boolean,
    idDirection: string
}