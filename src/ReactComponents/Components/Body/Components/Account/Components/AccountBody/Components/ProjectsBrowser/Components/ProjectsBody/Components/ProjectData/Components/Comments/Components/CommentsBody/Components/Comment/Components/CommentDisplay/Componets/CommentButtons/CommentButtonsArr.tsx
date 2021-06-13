import React, {FC} from "react";
import style from "./CommentButtonsArr.module.scss"
import {CommentButton} from "./Components/CommentButton/CommentButton";
import {CommentButtonsArrProps} from "./CommentButtonsArr.types";
import {useAccountReducerActions} from "../../../../../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Hooks/Actions.hooks";

export const CommentButtonsArr: FC<CommentButtonsArrProps> = (props) => {
    const {initialEditMode, isReadOnly, authorName} = props;
    const {addResponseCommentAction} = useAccountReducerActions();

    const responseFunction = () => addResponseCommentAction({
        commentDestination: authorName,
    });

    return <div className={style.CommentButtonsArr}>
        <CommentButton buttonText={'Ответить'} onClickFunc={responseFunction}/>
        {!isReadOnly && <CommentButton buttonText={'Изменить'} onClickFunc={initialEditMode}/>}
        {!isReadOnly && <CommentButton buttonText={'Удалить'} onClickFunc={() => {
        }}/>}
    </div>
};

