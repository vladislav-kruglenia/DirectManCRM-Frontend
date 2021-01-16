import {
    changeClientDataType,
    changeDeadlineTariffType,
    changeNameProjectType,
    changePacketPriceType,
    changeServiceInfoType,
    changeServiceNameType,
    changeServicePriceType,
    changeTariffNameType,
    ClientContactType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {DisplayTypeEnum} from "./DisplayingDifferentDataTypes";

export enum DisplayingDifferentDataEnum {
    price = "price",
    number = "number",
    text = "text",
    component = "component",
}

export enum FormTypeEnum {
    grandForm = "grandForm",
    number = "number",
    text = "text",
}

export enum GrandFormTypeEnum {
    contactsEditing = "contactsEditing",
    serviceEditing = "serviceEditing"
}

export type IdNumbersType = {
    id?: string
    idClient?: string
    idDirection?: string
    idTariff?: string
    idService?: string
}

export type ChangeValueGlobalType = (idNumbers: IdNumbersType, value: number| string | boolean) => void
    | changeClientDataType

export type ValueDisplayPropsType = {
    setEditModeInProps?: (value: boolean) => void,
    editModeStatus: boolean,
    valueGlobal: any,
    displayComponent?: any,
    displayType: DisplayTypeEnum,
    type: FormTypeEnum.number | FormTypeEnum.text | FormTypeEnum.grandForm,
    grandFormType?: GrandFormTypeEnum,
    grandFormComponent?: any,
    changeValueGlobal: ChangeValueGlobalType
        | changeClientDataType
        | changeServiceNameType
        | changeServicePriceType
        | changeTariffNameType
        | changePacketPriceType
        | changeDeadlineTariffType
        | changeServiceInfoType
        | changeNameProjectType,
    idNumbers: IdNumbersType,
}

export type EditModeValuePropsType = EditModeInputPropsType | EditModeGrandFormPropsType

export type EditModeInputPropsType = {
    valueGlobal: string,
    type: FormTypeEnum.text | FormTypeEnum.number,
    changeValueGlobal: any,
    grandFormType?: GrandFormTypeEnum,
    setEditMode: (status: boolean) => void,
    idNumbers: IdNumbersType,
}
export type EditModeGrandFormPropsType = {
    valueGlobal: ClientContactType,
    type: FormTypeEnum.grandForm,
    changeValueGlobal: changeClientDataType,
    grandFormType: GrandFormTypeEnum,
    grandFormComponent?: any
    setEditMode: (status: boolean) => void,
    idNumbers: IdNumbersType,
}

export type InputFormType = {
    value: string | number,
    type: FormTypeEnum.text | FormTypeEnum.number,
    idNumbers: IdNumbersType,
    setEditMode: (status: boolean) => void,
    changeValueHook: (value: string | number) => void,
    changeValueGlobal: ChangeValueGlobalType,
}

export type InputNumberPropsType = {
    value: string | number,
    changeValueHook: (value: number) => void
}

export type InputTextPropsType = {
    value: string | number,
    changeValueHook: (value: string) => void
}

export type GrandFormPropsType = {
    grandFormType: GrandFormTypeEnum,
    grandFormData: ClientContactType,
    grandFormComponent?: any
    changeValueGlobal: changeClientDataType,
    setEditMode: (status: boolean) => void,
}

