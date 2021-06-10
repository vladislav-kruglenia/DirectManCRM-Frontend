import React, {FC} from "react";
import style from "./CommentsBody.module.scss"
import {CommentsBodyForm} from "./Components/CommentsBodyForm/CommentsBodyForm";
import {CommentsDisplay} from "./Components/CommentsDisplay/CommentsDisplay";
import {CommentsBodyProps} from "./CommentsBody.types";

export const CommentsBody:FC<CommentsBodyProps> = (props) => {
    const {comments} = props;

    return <div className={style.CommentsBody}>
        <CommentsBodyForm/>
        <CommentsDisplay comments={comments}/>
    </div>
};


