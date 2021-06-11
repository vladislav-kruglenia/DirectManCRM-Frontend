import {OneInputText} from "../../../../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import React, {FC} from "react";
import {CommentFormProps} from "./CommentForm.types";

export const CommentForm:FC<CommentFormProps> = (props) => {
    const {startText, editText, exitEditMode} = props;

    return <OneInputText
        exitEditMode={exitEditMode}
        editText={editText}
        label={'Напишите комментарий'}
        textFieldSize={"small"}
        isMultiline={true}
        formValue={startText}
        isReset={true}
        textFieldVariant={"standard"}
        autoFocus={false}
    />
};