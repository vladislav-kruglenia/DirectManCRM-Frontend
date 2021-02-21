import React, {FC} from "react";
import {OneInputText} from "../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {QuestionTextFormProps} from "./Types/QuestionTextTypes";

export let QuestionTextForm: FC<QuestionTextFormProps> = (props) => {
    return <OneInputText
        formValue={props.questionText}
        label={"Редактировать текст вопроса"}
        textFieldSize={"medium"}
        exitEditMode={() => props.exitEditMode()}
        editText={text => props.editQuestionText(text)}
    />
};