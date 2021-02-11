import {
    changeClientDataType
} from "../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";
import {ClientContactFormType} from "../../../../redux/Types/ProjectCreation/ActionCreators";
import {ReturnKeysReduxForm} from "../../../AppGlobalTypes/AppGlobalTypes";
import {ClientContactType} from "./ContactContainerTypes";
import {ContactContainerComponentType} from "../../../AppGlobalTypes/TypesComponents";
import {EditResponseContact} from "../../../../components/Body/FillOrderQuestions/Question/Types/QuestionTypes";

export type EditingContactsPropsType = {
    changeValueGlobal: changeClientDataType
    idNumbers: {idClient: string}
    contacts: ClientContactType
    setEditMode: (status: boolean) => void
}

export type ContactFormOwnProps = {}

export type ContactFormKeysType = ReturnKeysReduxForm<ClientContactFormType>

export type EditContactsFormPropsType = {
    typeComponent: ContactContainerComponentType
    idClient: string,
    email: string | null,
    name: string | null,
    phoneNumber: string | null,
    indexQuestion: number,
    indexContact: number,
    changeClientData?: changeClientDataType,
    editResponseContact?: EditResponseContact,
    setEditMode: (status: boolean) => void
}

export type ChangeContactDataType = (values: ClientContactType) => void
