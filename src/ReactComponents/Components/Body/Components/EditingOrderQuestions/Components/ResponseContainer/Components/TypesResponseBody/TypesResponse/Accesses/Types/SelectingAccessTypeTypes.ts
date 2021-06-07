import {Access} from "../../../../../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";

export type SelectingAccessTypeProps = {
    accessData: Access,
    accessTypesArr: Array<Access>,
    editAccessType: (idAccess: string) => void
}
