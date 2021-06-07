import {
    addServiceType,
    changeDeadlineTariffType,
    changePacketPriceType,
    changePaymentPackageType,
    changeTariffNameType,
    changeTariffStatusType
} from "../../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";

export enum DisplayNumberEnum {
    number = "number",
    price = "price",
    day = "day"
}

export type IdNumbersType = {
    idDirection: string,
    idTariff: string
}

export type DisplayTariffNamePropsType = {
    tariffName: string,
    tariffId: string,
    idDirection: string
    idNumbers: IdNumbersType,
    changeTariffName: changeTariffNameType,
    changeTariffStatus: changeTariffStatusType,
}

export type DeleteTariffPropsType = {
    tariffId: string,
    idDirection: string
    changeTariffStatus: changeTariffStatusType,
    runEditModeStatus: (editModeStatus: boolean) => void
}

export type DisplayTariffPropertiesPropsType = {
    paymentPackage: boolean,
    tariffId: string,
    idDirection: string
    totalPriceTariff: number,
    deadlineTariff: number,
    idNumbers: IdNumbersType,
    changePacketPrice: changePacketPriceType,
    changeDeadlineTariff: changeDeadlineTariffType,
    changePaymentPackage: changePaymentPackageType,
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

export type DisplayNumberButtonPropsType = {
    type: DisplayNumberEnum,
    number: number
}
