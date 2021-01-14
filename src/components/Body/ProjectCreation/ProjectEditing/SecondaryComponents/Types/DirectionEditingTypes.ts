import {
    addTariffType,
    changePaymentInFullType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type DisplayTotalPricePropsType ={
    paymentInFull: boolean,
    changePaymentInFull: changePaymentInFullType,
    idDirection: string,
    directionTotalPrice: number | undefined
}

export type PaymentPropsType = {
    paymentInFull: boolean,
    changePaymentInFull: changePaymentInFullType
    idDirection: string
}

export type TotalPricePropsType = {
    paymentInFull: boolean,
    directionTotalPrice: number | undefined
}

export type AddTariffPropsType = {
    addTariff: addTariffType,
    idDirection: string
}