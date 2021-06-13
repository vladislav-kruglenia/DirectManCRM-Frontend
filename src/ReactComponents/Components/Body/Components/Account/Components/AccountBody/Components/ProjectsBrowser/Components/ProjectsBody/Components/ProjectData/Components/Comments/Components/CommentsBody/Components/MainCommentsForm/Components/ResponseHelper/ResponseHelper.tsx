import React, {FC} from "react";
import style from "./ResponseHelper.module.scss"
import {CommentButton} from "../../../Comment/Components/CommentDisplay/Componets/CommentButtons/Components/CommentButton/CommentButton";
import {ResponseHelperProps} from "./ResponseHelper.types";
import {useAccountReducerActions} from "../../../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Hooks/Actions.hooks";

export const ResponseHelper:FC<ResponseHelperProps> = (props) => {
    const {responseComment} = props;
    const {commentDestination, isResponse} = responseComment;

    const {removeResponseCommentAction} = useAccountReducerActions();
    const removeResponseFunc = () => removeResponseCommentAction({});

    return <div className={style.ResponseHelper}>
        {isResponse && <div className={style.responseHelperWrapper}>
            <div className={style.textResponse}>
                Ответ пользователю <span className={style.userName}>@{commentDestination}</span>
            </div>
            <CommentButton buttonText={'Отменить'} onClickFunc={removeResponseFunc}/>
        </div>}
    </div>
};