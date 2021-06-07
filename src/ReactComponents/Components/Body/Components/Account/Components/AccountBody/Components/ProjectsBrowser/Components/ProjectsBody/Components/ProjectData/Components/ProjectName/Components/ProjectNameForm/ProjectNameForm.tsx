import React, {FC} from "react";
import {ProjectNameFormProps} from "./ProjectNameForm.types";
import {OneInputText} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";

export const ProjectNameForm: FC<ProjectNameFormProps> = (props) => {
    const {projectName, exitEditMode} = props;

    return <div>
        <OneInputText
            label={'Имя проекта'}
            exitEditMode={() => exitEditMode()}
            editText={text => {}}
            formValue={projectName}
            textFieldSize={"medium"}
        />
    </div>
};