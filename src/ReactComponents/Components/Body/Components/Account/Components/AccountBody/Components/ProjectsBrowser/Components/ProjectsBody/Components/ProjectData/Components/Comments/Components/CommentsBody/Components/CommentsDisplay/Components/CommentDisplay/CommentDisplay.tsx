import React, {FC} from "react";
import style from "./CommentDisplay.module.scss"
import {CommentAuthor} from "./Componets/CommentAuthor/CommentAuthor";
import {CommentDate} from "./Componets/CommentDate/CommentDate";
import {CommentText} from "./Componets/CommentText/CommentText";
import {CommentDisplayProps} from "./CommentDisplay.types";

export const CommentDisplay:FC<CommentDisplayProps> = (props) => {
    const {text, date, authorName} = props;

    return <div className={style.CommentDisplay}>
        <div className={style.commentHeader}>
            <CommentAuthor authorName={authorName}/>
            <CommentDate date={date}/>
        </div>
        <CommentText text={text}/>
    </div>
};


