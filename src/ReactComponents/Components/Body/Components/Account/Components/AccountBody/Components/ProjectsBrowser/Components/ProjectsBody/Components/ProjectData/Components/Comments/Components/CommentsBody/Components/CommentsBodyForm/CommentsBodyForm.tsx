import React from "react";
import {OneInputText} from "../../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {CommentContainer} from "../CommentContainer/CommentContainer";

export const CommentsBodyForm = () => {

    return <CommentContainer
        DisplayComponent={
            <OneInputText
                exitEditMode={() => {}}
                editText={text => {}}
                label={'Напишите комментарий'}
                textFieldSize={"small"}
                isMultiline={true}
                formValue={''}
                isReset={true}
                textFieldVariant={"standard"}
            />
        }
    />
};