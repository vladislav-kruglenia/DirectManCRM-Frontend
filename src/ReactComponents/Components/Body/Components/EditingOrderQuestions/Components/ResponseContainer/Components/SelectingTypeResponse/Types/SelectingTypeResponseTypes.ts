import {OrderQuestionResponseTypes} from "../../../../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export type SelectingTypeResponseProps = {
    type: OrderQuestionResponseTypes,
    editResponseType: (responseType: OrderQuestionResponseTypes) => void
}