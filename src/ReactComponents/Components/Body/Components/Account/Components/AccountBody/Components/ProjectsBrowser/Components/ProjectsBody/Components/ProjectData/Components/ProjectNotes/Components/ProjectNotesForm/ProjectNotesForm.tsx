import React, {FC} from "react";
import style from "./ProjectNotesForm.module.scss"
import {OneInputText} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {ProjectNotesFormProps} from "./ProjectNotesForm.types";

export const ProjectNotesForm:FC<ProjectNotesFormProps> = (props) => {
    const {textForm, exitEditMode, editText} = props;

    return <div className={style.ProjectNotesForm}>
        <OneInputText
            textFieldSize={"medium"}
            label={'Описание проекта'}
            multiline={true}
            formValue={textForm}
            exitEditMode={exitEditMode}
            editText={editText}
        />
    </div>
};