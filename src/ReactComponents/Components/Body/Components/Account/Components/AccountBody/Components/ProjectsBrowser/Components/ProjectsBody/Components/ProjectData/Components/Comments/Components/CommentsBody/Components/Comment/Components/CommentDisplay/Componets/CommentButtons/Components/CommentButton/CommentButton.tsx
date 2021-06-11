import React, {FC} from "react";
import style from "./CommentButton.module.scss"
import {CommentButtonProps} from "./CommentButton.types";

export const CommentButton:FC<CommentButtonProps> = (props) => {
    const {buttonText, onClickFunc} = props;

    return <div className={style.CommentButton} onClick={onClickFunc}>{buttonText}</div>
};