import React, {FC, useState} from "react";
import style from "./Style/QuestionText.module.scss"
import {DisplayQuestionText} from "./DisplayQuestionText";
import {QuestionTextForm} from "./QuestionTextForm";
import {ValueDisplay} from "../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {QuestionTextProps} from "./Types/QuestionTextTypes";

export let QuestionText: FC<QuestionTextProps> = (props) => {
    let isChangedText = props.questionTextData.isChangedQuestionText;
    let [editMode, setEditMode] = useState(!isChangedText);

    return <div className={style.QuestionText}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={value => setEditMode(value)}
            isNotAllowedToExitEditMode={!isChangedText}
            displayComponent={<DisplayQuestionText
                deleteQuestion={()=>{props.questionActions.deleteQuestionAction(props.indexQuestion)}}
                indexQuestion={props.indexQuestion}
                questionText={props.questionTextData.questionText}
                enableEditMode={() => setEditMode(true)}
            />}
            grandFormComponent={<QuestionTextForm
                questionText={props.questionTextData.questionText}
                exitEditMode={() => setEditMode(false)}
                editQuestionText={text => props.questionActions.editQuestionTextAction(props.indexQuestion, text)}
            />}
        />
    </div>
};