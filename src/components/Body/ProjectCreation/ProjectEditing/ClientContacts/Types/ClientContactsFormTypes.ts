import {
    changeClientDataType,
    ClientContactType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {ClientContactFormType} from "../../../../../../redux/Types/ProjectCreation/ActionCreators";
import {ReturnKeysReduxForm} from "../../../../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";

export type EditingContactsPropsType = {
    changeValueGlobal: changeClientDataType
    idNumbers: {idClient: string}
    contacts: ClientContactType
    setEditMode: (status: boolean) => void
}

export type ContactFormOwnProps = {}

export type ContactFormKeysType = ReturnKeysReduxForm<ClientContactFormType>

export type EditContactsFormPropsType = {
    idClient: string,
    email: string | null,
    name: string | null,
    phoneNumber: string | null,
    changeClientData: changeClientDataType,
    setEditMode: (status: boolean) => void
}
