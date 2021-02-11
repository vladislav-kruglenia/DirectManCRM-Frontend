import {EditResponseText} from "../../Types/QuestionTypes";

export type ResponseTextPropsTypes = {
    indexQuestion: number,
    responseData: string,
    isChanged: boolean,
    editResponseText: EditResponseText
}

export type DisplayResponseType = {
    response: string,
    setEditMode: (value: boolean) => void
}
export type EditResponseFormProps = {
    response: string,
    indexQuestion: number,
    setEditMode: (value: boolean) => void,
    editResponseText: EditResponseText
}
export type ValuesFormType = {
    response: string
}