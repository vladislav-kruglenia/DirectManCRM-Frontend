import React, {FC} from "react";
import style from "./CheckboxItem.module.scss"
import {CheckboxFragment} from "../CheckboxFragment/CheckboxFragment";
import {CheckListLabel} from "../CheckListLabel/CheckListLabel";
import {CheckboxItemProps} from "./CheckboxItem.types";

export const CheckboxItem:FC<CheckboxItemProps> = (props) => {
    const {itemName, isReady} = props.checkboxItem;

    return <div className={style.CheckboxItem}>
        <CheckboxFragment isChecked={isReady}/>
        <CheckListLabel checklistItemName={itemName}/>
    </div>
};