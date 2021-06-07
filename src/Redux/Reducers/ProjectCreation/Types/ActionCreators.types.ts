// ActionCreators Types
import {
    ADD_NEW_CONTACT_PR_CREATION,
    ADD_NEW_SERVICE_PR_CREATION,
    ADD_NEW_TARIFF_PR_CREATION,
    ADDING_TARIFFS_DATA_PR_CREATION,
    CHANGE_CLIENT_DATA_PR_CREATION,
    CHANGE_NAME_PROJECT_PR_CREATION,
    DELETE_CONTACT_PR_CREATION,
    DELETE_SERVICE_PR_CREATION,
    DELETE_TARIFFS_DATA_PR_CREATION,
    TARIFF_DELETE_PR_CREATION
} from "../ProjectCreation.reducer";
import {ServicesType, TariffsInfoType, TariffsType} from "../../../../RestAPI/Types/ApiTypes";
import {ClientContactType} from "../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";
import {
    CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION,
    CHANGE_DIRECTION_STATUS_PR_CREATION,
    CHANGE_SERVICE_NAME_PR_CREATION,
    CHANGE_SERVICE_PRICE_PR_CREATION,
    CHANGE_TARIFF_DEADLINE_PR_CREATION,
    CHANGE_TARIFF_NAME_PR_CREATION,
    CHANGE_TARIFF_PACKET_PRICE_PR_CREATION,
    CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION,
    CHANGE_TARIFF_STATUS_PR_CREATION
} from "../ProjectCreation.reducer.immer";

export type ClientContactFormType = {
    name: string | null,
    email: string | null,
    phoneNumber: string | null,
}
export type IdNumbersType = {
    idDirection: string,
    idTariff: string,
    idService: string
}

export type IdDirectionAndTariffType = {
    idDirection: string,
    idTariff: string
}

export type ChangeClientDataAC = {
    type: typeof CHANGE_CLIENT_DATA_PR_CREATION,
    idClient: string,
    newClientData: ClientContactType
}
export type AddContactAC = {
    type: typeof ADD_NEW_CONTACT_PR_CREATION,
    newElement: {
        idClient: string,
        name: null,
        email: null,
        phoneNumber: null,
    }
}
export type DeleteContactAC = {
    type: typeof DELETE_CONTACT_PR_CREATION,
    idClient: string
}
export type ChangeNameProjectAC = {
    type: typeof CHANGE_NAME_PROJECT_PR_CREATION,
    propertyValue: string
}
export type ChangeDirectionStatusAC = {
    type: typeof CHANGE_DIRECTION_STATUS_PR_CREATION,
    propertyName: "selected",
    idDirection: string,
    propertyValue: boolean
}
export type ChangePaymentInFullAC = {
    type: typeof CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION,
    propertyName: "paymentInFull",
    idDirection: string,
    propertyValue: boolean
}
export type ChangeTariffStatusAC = {
    type: typeof CHANGE_TARIFF_STATUS_PR_CREATION,
    propertyName: "tariffStatus",
    propertyValue: boolean,
    idTariff: string,
    idDirection: string
}
export type ChangePaymentPackageAC = {
    type: typeof CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION,
    propertyName: "paymentPackage",
    propertyValue: boolean,
    idTariff: string,
    idDirection: string
}
export type ChangeTariffNameAC = {
    type: typeof CHANGE_TARIFF_NAME_PR_CREATION,
    propertyName: "tariffName",
    idDirection: string,
    idTariff: string,
    tariffName: string,
}
export type ChangePacketPriceAC = {
    type: typeof CHANGE_TARIFF_PACKET_PRICE_PR_CREATION,
    propertyName: "packetPrice",
    idDirection: string,
    idTariff: string,
    propertyValue: number
}
export type ChangeDeadlineTariffAC = {
    type: typeof CHANGE_TARIFF_DEADLINE_PR_CREATION,
    propertyName: "deadline",
    idDirection: string,
    idTariff: string,
    propertyValue: number
}
export type ChangeServiceNameAC = {
    type: typeof CHANGE_SERVICE_NAME_PR_CREATION,
    propertyName: "serviceName",
    idDirection: string,
    idTariff: string,
    idService: string,
    propertyValue: string
}
export type ChangeServicePriceAC = {
    type: typeof CHANGE_SERVICE_PRICE_PR_CREATION,
    propertyName: "servicePrice",
    idDirection: string,
    idTariff: string,
    idService: string,
    propertyValue: number

}
export type AddingTariffsDataAC = {
    type: typeof ADDING_TARIFFS_DATA_PR_CREATION,
    data: TariffsInfoType
}
export type DeleteTariffsDataAC = {
    type: typeof DELETE_TARIFFS_DATA_PR_CREATION
}
export type AddTariffAC = {
    type: typeof ADD_NEW_TARIFF_PR_CREATION,
    newElement: TariffsType,
    idDirection: string
}
export type AddServiceAC = {
    type: typeof ADD_NEW_SERVICE_PR_CREATION,
    newElement: ServicesType,
    idDirection: string,
    idTariff: string
}
export type DeleteServiceAC = {
    type: typeof DELETE_SERVICE_PR_CREATION,
    idDirection: string,
    idTariff: string,
    idService: string
}

export type TariffDeleteAC = {
    type: typeof TARIFF_DELETE_PR_CREATION,
    idDirection: string,
    idTariff: string
}

/*export type ChangeDirectionPropertiesACType = ChangeDirectionStatusAC | ChangePaymentInFullAC
export type ChangeServicePropertiesACType = ChangeServiceNameAC | ChangeServicePriceAC*/
/*export type ChangeTariffPropertiesACType = ChangeTariffStatusAC
    | ChangePaymentPackageAC
    | ChangeTariffNameAC
    | ChangePacketPriceAC
    | ChangeDeadlineTariffAC*/

/*export type ChangePropertiesACType = ChangeDirectionPropertiesACType
    | ChangeServicePropertiesACType
    | ChangeTariffPropertiesACType*/


export type ActionCreatorsType = ChangeClientDataAC
    | AddContactAC
    | DeleteContactAC
    | ChangeNameProjectAC
    | ChangeDirectionStatusAC
    | ChangePaymentInFullAC
    | ChangeTariffStatusAC
    | ChangePaymentPackageAC
    | ChangeTariffNameAC
    | ChangePacketPriceAC
    | ChangeDeadlineTariffAC
    | ChangeServiceNameAC
    | ChangeServicePriceAC
    | AddingTariffsDataAC
    | DeleteTariffsDataAC
    | AddTariffAC
    | AddServiceAC
    | DeleteServiceAC
    | TariffDeleteAC