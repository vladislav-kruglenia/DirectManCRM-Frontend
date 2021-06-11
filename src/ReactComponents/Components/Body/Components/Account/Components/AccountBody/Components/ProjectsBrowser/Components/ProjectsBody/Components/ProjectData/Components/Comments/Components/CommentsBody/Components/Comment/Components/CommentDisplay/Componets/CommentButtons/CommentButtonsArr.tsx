import React, {FC} from "react";
import style from "./CommentButtonsArr.module.scss"
import {CommentButton} from "./Components/CommentButton/CommentButton";
import {CommentButtonsArrProps} from "./CommentButtonsArr.types";

export const CommentButtonsArr:FC<CommentButtonsArrProps> = (props) => {
    const {initialEditMode, isReadOnly} = props;

    return <div className={style.CommentButtonsArr}>
        <CommentButton buttonText={'Ответить'} onClickFunc={() => {}}/>
        {isReadOnly && <CommentButton buttonText={'Изменить'} onClickFunc={initialEditMode}/>}
        {isReadOnly && <CommentButton buttonText={'Удалить'} onClickFunc={() => {}}/>}
    </div>
};

