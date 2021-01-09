import {
    addServiceType,
    changeDeadlineTariffType,
    changePacketPriceType,
    changePaymentPackageType,
    changeTariffNameType,
    changeTariffStatusType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type IdNumbersType = {
    idDirection: string,
    idTariff: string
}

export type DisplayTariffNamePropsType = {
    tariffName: string,
    changeTariffName: changeTariffNameType,
    idNumbers: IdNumbersType
}

export type DeleteTariffPropsType = {
    changeTariffStatus: changeTariffStatusType,
    tariffId: string,
    idDirection: string
}

export type PaymentMethodPropsType = {
    changePaymentPackage: changePaymentPackageType,
    paymentPackage: boolean,
    tariffId: string,
    idDirection: string
}

export type DisplayTariffPricePropsType = {
    paymentPackage: boolean,
    totalPriceTariff: number,
    changePacketPrice: changePacketPriceType,
    idNumbers: IdNumbersType,
}

export type DisplayDeadlineTariffPropsType = {
    deadlineTariff: number,
    changeDeadlineTariff: changeDeadlineTariffType,
    idNumbers: IdNumbersType,
}

export type AddNewServicePropsType = {
    addService: addServiceType,
    idDirection: string,
    tariffId: string
}
