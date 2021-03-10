import {changeTariffStatusType} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {TariffName, TariffsPlansType} from "../../../Types/ProjectCreationСontainerTypes";
import {ProjectCreationEnum} from "../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type TariffPlansPropsType = {
    changeTariffStatus: changeTariffStatusType
    typeURL: ProjectCreationEnum
    tariffsAndNamesDirections: Array<TariffsPlansType>
}

export type TariffPlanPropsType = {
    key: string
    typeURL: ProjectCreationEnum
    nameDirection: string
    idDirection: string
    namesTariffs: Array<TariffName>
    changeTariffStatus: changeTariffStatusType
}

export type TariffType = {
    key: string
    tariffName: string | null
    tariffStatus: boolean
    tariffId: string
    idDirection: string
    changeTariffStatus: changeTariffStatusType
}