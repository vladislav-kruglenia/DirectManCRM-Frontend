import React, {FC, useState} from "react";
import style from "./CheckListLabel.module.scss"
import {CheckListLabelDisplay} from "./Components/CheckListLabelDisplay/CheckListLabelDisplay";
import {CheckListLabelForm} from "./Components/CheckListLabelForm/CheckListLabelForm";
import {CheckListLabelProps} from "./CheckListLabel.types";
import {ValueDisplay} from "../../../../DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export const CheckListLabel:FC<CheckListLabelProps> = (props) => {
    const {checklistItemName} = props;
    const [editMode, setEditMode] = useState(false);

    return <div className={style.CheckListLabel}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={
                <CheckListLabelDisplay
                    checklistItemName={checklistItemName}
                    enableEditMode={() => setEditMode(true)}
                />}
            grandFormComponent={
                <CheckListLabelForm
                    checklistItemName={checklistItemName}
                    exitEditMode={() => setEditMode(false)}
                />}
        />
    </div>
};



