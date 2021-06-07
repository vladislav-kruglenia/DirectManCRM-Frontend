import {QuestionActions} from "../../../Types/EditingOrderQuestionsTypes";
import {QuestionTextData} from "../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";

export type QuestionTextProps = {
    indexQuestion: number,
    questionTextData: QuestionTextData,
    questionActions: QuestionActions,
}

export type DisplayQuestionTextProps = {
    indexQuestion: number
    questionText: string
    enableEditMode: () => void
    deleteQuestion: () => void
}

export type EditAndDeleteQuestionTextProps = {
    enableEditMode: () => void
    deleteQuestion: () => void
}


export type QuestionTextFormProps = {
    questionText: string
    exitEditMode: () => void
    editQuestionText: (text: string) => void
}