export type QuestionPropsTypes = {
    indexQuestion: number,
    question: string,
    response: string
}

export type DisplayResponseType = {
    response: string,
    setEditMode: (value: boolean) => void
}

export type EditResponseFormProps = {
    response: string,
    indexQuestion: number,
    setEditMode: (value: boolean) => void
}

export type ValuesFormType = {
    response: string
}