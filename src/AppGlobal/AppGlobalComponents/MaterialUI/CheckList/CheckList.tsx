import React, {FC} from "react";
import style from "./CheckList.module.scss"
import {ChecklistItem, CheckListProps} from "./CheckList.types";
import {CheckboxItem} from "./Components/CheckboxItem/CheckboxItem";

export const CheckList: FC<CheckListProps> = (props) => {
    const checkboxItems = props.checklistItems.map((item: ChecklistItem) => (
        <CheckboxItem key={item.itemName} checkboxItem={item}/>
    ));

    return <div className={style.CheckList}>
        {checkboxItems}
    </div>
};



