import {
    addContactType,
    changeClientDataType,
    deleteContactType
} from "../../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {ClientContactType} from "../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";

export type ClientContactsFCPropsType = {
    changeClientData: changeClientDataType
    addContact: addContactType
    deleteContact: deleteContactType
    clientContacts: Array<ClientContactType>
}

