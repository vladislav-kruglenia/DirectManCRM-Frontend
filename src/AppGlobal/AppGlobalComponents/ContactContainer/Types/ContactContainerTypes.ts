import {
    changeClientDataType,
    deleteContactType
} from "../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";
import {
    DeleteResponseContact,
    EditResponseContact
} from "../../../../ReactComponents/Components/Body/Components/FillOrderQuestions/Question/Types/QuestionTypes";
import {ContactContainerComponentType} from "../../../AppGlobalTypes/TypesComponents";

export type ClientContactType = {
    idClient: string,
    name: string | null,
    email: string | null,
    phoneNumber: string | null,
}
export type ContactContainerProps = {
    key: string,
    typeComponent: ContactContainerComponentType
    contacts: ClientContactType,
    changeData?: changeClientDataType,
    deleteContact?: deleteContactType,
    indexQuestion?: number,
    indexContact?: number,
    editResponseContact?: EditResponseContact,
    deleteResponseContact?: DeleteResponseContact,
    displayOnly?: boolean
}





export type ContactPropsType = {
    contacts: ClientContactType
}
export type EditAndDeletePropsType = {
    typeComponent: ContactContainerComponentType,
    contacts: ClientContactType,
    indexQuestion: number,
    indexContact: number,
    deleteContact?: deleteContactType,
    deleteResponseContact?: DeleteResponseContact,
    setEditMode: (status: boolean) => void,
}