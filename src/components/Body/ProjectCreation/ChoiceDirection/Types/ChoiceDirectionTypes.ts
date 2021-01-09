import {changeDirectionStatusType} from "../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {GetDirectionForDirection} from "../../Types/ProjectCreationSelectorsTypes";
import {ProjectCreationEnum} from "../../../../../AppGlobalTypes/TypesComponents";

export type ChoiceDirectionPropsType = {
    changeDirectionStatus: changeDirectionStatusType
    typeURL: ProjectCreationEnum
    directions: Array<GetDirectionForDirection>
}
export type DirectionPropsType = {
    changeDirectionStatus: changeDirectionStatusType
    key: string
    idDirection: string
    status: boolean
    name: string
}

