import React, {FC} from "react";
import {OneInputText} from "../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {QuestionTextFormProps} from "./Types/QuestionTextTypes";

export let QuestionTextForm: FC<QuestionTextFormProps> = (props) => {
    return <OneInputText
        formValue={"Текст вопроса"}
        label={"Редактировать текст вопроса"}
        textFieldSize={"medium"}
        exitEditMode={() => props.exitEditMode()}
    />
};