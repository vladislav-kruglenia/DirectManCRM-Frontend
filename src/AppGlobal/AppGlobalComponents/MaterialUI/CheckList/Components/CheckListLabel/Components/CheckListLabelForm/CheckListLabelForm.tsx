import React, {FC} from "react";
import {OneInputText} from "../../../../../../Formik/OneInputText/OneInputText";
import {CheckListLabelFormProps} from "./CheckListLabelForm.types";

export const CheckListLabelForm:FC<CheckListLabelFormProps> = (props) => {
    const {checklistItemName, exitEditMode} = props;

    return <div>
        <OneInputText
            exitEditMode={() => {}}
            editText={exitEditMode}
            formValue={checklistItemName}
            textFieldSize={"small"}
            label={'Название услуги'}
        />
    </div>
};