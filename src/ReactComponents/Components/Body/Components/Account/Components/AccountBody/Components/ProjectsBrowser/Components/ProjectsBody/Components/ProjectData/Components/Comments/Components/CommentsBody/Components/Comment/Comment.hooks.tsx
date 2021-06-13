import React, {useState} from "react";
import {UseTypeCommentDisplayDTO} from "./Comment.types";
import {CommentDisplay} from "./Components/CommentDisplay/CommentDisplay";
import {CommentForm} from "./Components/CommentForm/CommentForm";

export const useTypeCommentDisplay = (dto: UseTypeCommentDisplayDTO) => {
    const {isEditMode, displayProps, formProps} = dto;
    const {isMainForm} = formProps;
    const [editMode, setEditMode] = useState(isEditMode);

    return editMode
        ? <CommentForm {...formProps} exitEditMode={() => {if(!isMainForm) setEditMode(false)}}/>
        : <CommentDisplay {...displayProps} initialEditMode={() => setEditMode(true)}/>
};
