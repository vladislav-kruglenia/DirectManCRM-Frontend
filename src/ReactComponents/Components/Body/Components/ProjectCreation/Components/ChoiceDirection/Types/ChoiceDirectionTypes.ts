import {changeDirectionStatusType} from "../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";
import {GetDirectionForDirection} from "../../../Types/ProjectCreationSelectorsTypes";
import {ProjectCreationEnum} from "../../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

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

