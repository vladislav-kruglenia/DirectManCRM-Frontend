import {
    changeNameProjectType
} from "../../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {ClientContactType} from "../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type PropsTypes = {
    nameProject: string
    clientContacts: Array<ClientContactType>
    changeNameProject: changeNameProjectType
}