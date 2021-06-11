export interface CommentFormProps extends CommentFormTypes{
    exitEditMode: () => void,
}

export type CommentFormTypes = {
    startText: string,
    editText: (text: string) => void,
}

