import {
    Access,
} from "../../../../../../../../../../redux/Types/EditingOrderQuestions/EditingOrderQuestionsReducerTypes";

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

