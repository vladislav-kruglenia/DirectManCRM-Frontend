import React, {useState} from "react";
import style from "./Style/QuestionText.module.scss"
import {DisplayQuestionText} from "./DisplayQuestionText";
import {QuestionTextForm} from "./QuestionTextForm";
import {ValueDisplay} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";

export let QuestionText = () => {
    let [editMode, setEditMode] = useState(false);
    return <div className={style.QuestionText}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={<DisplayQuestionText enableEditMode={() => setEditMode(true)}/>}
            grandFormComponent={<QuestionTextForm exitEditMode={() => setEditMode(false)}/>}
        />
    </div>
};