import React, {FC} from "react";
import style from "./CommentForm.module.scss";
import {OneInputText} from "../../../../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {CommentFormProps} from "./CommentForm.types";
import {ResponseHelper} from "../../../MainCommentsForm/Components/ResponseHelper/ResponseHelper";
import {useSelector} from "react-redux";
import {getProjectCommentsResponseSelector} from "../../../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Account.selectors";
import {useCommentFormCallbacks, useStartTextForm} from "./CommentForm.hooks";

export const CommentForm:FC<CommentFormProps> = (props) => {
    const {startText, editText, exitEditMode, isMainForm} = props;

    const responseComment = useSelector(getProjectCommentsResponseSelector);
    const startTextForm = useStartTextForm({startText, isMainForm});
    const {onBlurFunc, editTextFunc} = useCommentFormCallbacks({editText, isMainForm, isResponse: responseComment.isResponse});

    return <div className={style.CommentForm}>
        {isMainForm && <ResponseHelper responseComment={responseComment}/>}
        <OneInputText
            exitEditMode={exitEditMode}
            label={'Напишите комментарий'}
            textFieldSize={"small"}
            isMultiline={true}
            formValue={startTextForm}
            isReset={true}
            textFieldVariant={"standard"}
            autoFocus={false}
            onBlur={onBlurFunc}
            editText={editTextFunc}
        />
    </div>
};