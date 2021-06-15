import React, {FC} from "react";
import style from "./CheckListLabelDisplayButtons.module.scss"
import {DeleteButton, EditButton} from "../../../../../../../MaterialButtons/MaterialButtons";
import {CheckListLabelDisplayButtonsProps} from "./CheckListLabelDisplayButtons.types";

export const CheckListLabelDisplayButtons:FC<CheckListLabelDisplayButtonsProps> = (props) => {
    const {enableEditMode, deleteFunc} = props;

    return <div className={style.CheckListLabelDisplayButtons}>
        <EditButton
            onClickFunc={enableEditMode}
            size={"small"}
            iconSize={"small"}
        />
        <DeleteButton
            onClickFunc={deleteFunc}
            iconSize={"small"}
            size={"small"}
        />
    </div>
};