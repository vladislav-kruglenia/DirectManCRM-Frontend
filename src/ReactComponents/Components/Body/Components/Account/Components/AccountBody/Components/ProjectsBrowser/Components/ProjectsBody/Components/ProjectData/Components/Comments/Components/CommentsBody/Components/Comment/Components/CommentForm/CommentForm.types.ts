export interface CommentFormProps extends CommentFormTypes{
    exitEditMode: () => void,
}

export type CommentFormTypes = {
    startText: string,
    isMainForm?: boolean,
    editText: (text: string) => void,
}

export type UseCommentFormCallbacksDTO = {
    isMainForm: boolean | undefined,
    isResponse: boolean,
    editText: (text: string) => void,
}

export type UseStartTextFormDTO = {
    isMainForm: boolean | undefined,
    startText: string,
}

