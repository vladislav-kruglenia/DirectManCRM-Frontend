import {CommentDisplayType} from "./Components/CommentDisplay/CommentDisplay.types";
import {CommentFormTypes} from "./Components/CommentForm/CommentForm.types";

export type CommentProps = {
    isEditMode: boolean,
    displayProps: CommentDisplayType,
    formProps: CommentFormTypes,
}


export interface UseTypeCommentDisplayDTO extends CommentProps {}
