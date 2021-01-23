import {EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST} from "../../fillOrderQuestionsReducer";

export type EditResponseTextAC = {
    type: typeof EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST,
    indexQuestion: number,
    response: string
}

export type ActionCreatorsType = EditResponseTextAC