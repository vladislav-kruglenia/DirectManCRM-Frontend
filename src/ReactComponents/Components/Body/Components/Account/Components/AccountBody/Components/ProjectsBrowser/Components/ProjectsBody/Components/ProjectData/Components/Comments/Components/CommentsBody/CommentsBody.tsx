import React, {FC} from "react";
import style from "./CommentsBody.module.scss"
import {MainCommentsForm} from "./Components/MainCommentsForm/MainCommentsForm";
import {CommentsArr} from "./Components/CommentsArr/CommentsArr";
import {CommentsBodyProps} from "./CommentsBody.types";

export const CommentsBody:FC<CommentsBodyProps> = (props) => {
    const {comments} = props;

    return <div className={style.CommentsBody}>
        <MainCommentsForm startText={''}/>
        <CommentsArr comments={comments}/>
    </div>
};


