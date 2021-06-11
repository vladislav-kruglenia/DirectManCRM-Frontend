import React, {useState} from "react";
import {UseTypeCommentDisplayDTO} from "./Comment.types";
import {CommentDisplay} from "./Components/CommentDisplay/CommentDisplay";
import {CommentForm} from "./Components/CommentForm/CommentForm";

export const useTypeCommentDisplay = (dto: UseTypeCommentDisplayDTO) => {
    const {isEditMode, displayProps, formProps} = dto;
    const [editMode, setEditMode] = useState(isEditMode);

    return editMode
        ? <CommentForm {...formProps} exitEditMode={() => setEditMode(false)}/>
        : <CommentDisplay {...displayProps} initialEditMode={() => setEditMode(true)}/>
};
