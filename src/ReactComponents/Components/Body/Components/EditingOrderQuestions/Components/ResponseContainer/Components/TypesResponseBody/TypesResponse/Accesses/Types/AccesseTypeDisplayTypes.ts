import {
    Access,
} from "../../../../../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";

export type AccessTypeDisplayProps = {
    accessData: Access
    accessTypesArr: Array<Access>
    openEditMode: () => void
    editAccessType: (idAccess: string) => void
    deleteAccess: () => void
}

export type AccessButtonsProps = {
    accessData: Access,
    openEditMode: () => void,
    deleteAccess: () => void
}

