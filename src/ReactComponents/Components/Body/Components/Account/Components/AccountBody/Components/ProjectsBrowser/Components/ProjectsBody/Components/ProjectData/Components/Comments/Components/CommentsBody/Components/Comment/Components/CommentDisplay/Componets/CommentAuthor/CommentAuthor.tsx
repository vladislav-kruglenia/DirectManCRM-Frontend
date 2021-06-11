import React, {FC} from "react";
import style from "./CommentAuthor.module.scss"
import {CommentAuthorProps} from "./CommentAuthor.types";

export const CommentAuthor:FC<CommentAuthorProps> = (props) => {
    return <div className={style.CommentAuthor}>
        {props.authorName}
    </div>
};