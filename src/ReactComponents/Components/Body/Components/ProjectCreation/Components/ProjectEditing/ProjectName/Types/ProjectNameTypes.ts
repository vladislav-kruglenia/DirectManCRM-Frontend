import {
    changeNameProjectType
} from "../../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";
import {ClientContactType} from "../../../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type PropsTypes = {
    nameProject: string
    clientContacts: Array<ClientContactType>
    changeNameProject: changeNameProjectType
}