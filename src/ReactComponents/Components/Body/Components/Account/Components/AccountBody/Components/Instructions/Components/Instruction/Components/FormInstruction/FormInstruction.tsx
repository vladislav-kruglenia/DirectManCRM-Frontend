import React, {FC} from "react";
import style from "./FormInstruction.module.scss"
import {OneInputText} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {FormInstructionProps} from "./FormInstruction.types";
import {Button} from "@material-ui/core";

export const FormInstruction:FC<FormInstructionProps> = (props) => {
    const {exitEditMode, instructionText, editText} = props;

    return <div className={style.FormInstruction}>
        <OneInputText
            label={"Редактирование инструкции"}
            textFieldSize={"medium"}
            exitEditMode={exitEditMode}
            formValue={instructionText}
            editText={editText}
            isMultiline={true}
            autoFocus={true}
        />
        <Button
            className={style.helperButton}
            size={"small"}
            variant={"contained"}
            color={"inherit"}
            href={"https://www.markdownguide.org/basic-syntax/"}
            target={"_blank"}
        >
            Помощь по форматированию
        </Button>
    </div>
};