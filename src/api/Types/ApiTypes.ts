export type ServicesType = {
    serviceName: string | null,
    serviceStatus: boolean,
    serviceId: string,
    servicePrice: number
}

export type TariffsType = {
    tariffId: string,
    tariffName: string | null,
    tariffStatus: boolean,
    packetPrice: number,
    paymentPackage: boolean,
    deadline: number,
    services: Array<ServicesType>
}

export type TariffsOrderType = {
    tariffId: string,
    tariffName: string,
    tariffStatus?: boolean,
    packetPrice: number,
    paymentPackage: boolean,
    deadline: number,
    totalPrice: number,
    services: Array<ServicesType>
}


export type DirectionType<T = Array<TariffsType>> = {
    nameDirection: string,
    idDirection: string,
    selected: boolean,
    paymentInFull: boolean,
    namesTariffs: T
}

export type DirectionOrderType<T = Array<TariffsOrderType>> = {
    nameDirection: string,
    idDirection: string,
    paymentInFull: boolean,
    directionTotalPrice?: number,
    namesTariffs: T
}

export type TariffsInfoType = Array<DirectionType>

export type TariffsOrderInfoType = Array<DirectionOrderType>

export type OrderDataType = {
    userId: string,
    nameProject: string,
    directionsAndTariffs: TariffsOrderInfoType
}

export type TariffsInfoDataType = {
    directionsAndTariffs: TariffsInfoType
}



export type LoginResType = {
    message: string,
    isAuth: boolean,
    userId: string,
    token: string
}

export type GetTariffsResType = {
    message: string,
    tariffsInfo: TariffsInfoType
}

export type SaveOrderInfoResType = CommonResType

export type EditTariffsInfoResType = CommonResType



export type CommonResType = {
    message: string
}



