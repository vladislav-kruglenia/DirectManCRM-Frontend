import React, {FC} from "react";
import style from "./CommentDisplay.module.scss"
import {CommentAuthor} from "./Componets/CommentAuthor/CommentAuthor";
import {CommentDate} from "./Componets/CommentDate/CommentDate";
import {CommentText} from "./Componets/CommentText/CommentText";
import {CommentDisplayProps} from "./CommentDisplay.types";
import {CommentButtonsArr} from "./Componets/CommentButtons/CommentButtonsArr";

export const CommentDisplay:FC<CommentDisplayProps> = (props) => {
    const {text, date, authorName, initialEditMode, isReadOnly} = props;

    return <div className={style.CommentDisplay}>
        <div className={style.commentHeader}>
            <CommentAuthor authorName={authorName}/>
            <CommentDate date={date}/>
        </div>
        <CommentText text={text}/>
        <CommentButtonsArr initialEditMode={initialEditMode} isReadOnly={isReadOnly}/>
    </div>
};



