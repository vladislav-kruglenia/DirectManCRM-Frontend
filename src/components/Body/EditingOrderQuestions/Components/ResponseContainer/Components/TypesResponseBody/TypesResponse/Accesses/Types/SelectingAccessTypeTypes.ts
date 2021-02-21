import {Access} from "../../../../../../../../../../redux/Types/EditingOrderQuestions/EditingOrderQuestionsReducerTypes";

export type SelectingAccessTypeProps = {
    accessData: Access,
    accessTypesArr: Array<Access>,
    editAccessType: (idAccess: string) => void
}
