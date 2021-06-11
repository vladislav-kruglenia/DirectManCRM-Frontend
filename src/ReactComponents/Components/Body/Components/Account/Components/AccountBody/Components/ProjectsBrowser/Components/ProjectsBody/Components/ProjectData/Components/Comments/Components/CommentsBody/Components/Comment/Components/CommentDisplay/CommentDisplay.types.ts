export interface CommentDisplayProps extends CommentDisplayType{
    initialEditMode: () => void,
}

export type CommentDisplayType = {
    authorName: string,
    date: string,
    text: string,
    isReadOnly: boolean,
}

