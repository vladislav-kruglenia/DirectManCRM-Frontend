import {
    addContactType,
    changeClientDataType,
    ClientContactType,
    deleteContactType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type ClientContactsFCPropsType = {
    changeClientData: changeClientDataType
    addContact: addContactType
    deleteContact: deleteContactType
    clientContacts: Array<ClientContactType>
}

export type ContactContainerPropsType = {
    key: string,
    contacts: ClientContactType,
    changeData: changeClientDataType,
    deleteContact: deleteContactType,
}

export type ContactPropsType = {
    contacts: ClientContactType
}

export type EditAndDeletePropsType = {
    contacts: ClientContactType,
    deleteContact: deleteContactType,
    setEditMode: (status: boolean) => void
}