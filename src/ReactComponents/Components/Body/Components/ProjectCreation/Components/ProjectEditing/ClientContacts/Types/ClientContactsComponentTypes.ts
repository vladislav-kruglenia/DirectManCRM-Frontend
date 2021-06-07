import {
    addContactType,
    changeClientDataType,
    deleteContactType
} from "../../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";
import {ClientContactType} from "../../../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type ClientContactsFCPropsType = {
    changeClientData: changeClientDataType
    addContact: addContactType
    deleteContact: deleteContactType
    clientContacts: Array<ClientContactType>
}

