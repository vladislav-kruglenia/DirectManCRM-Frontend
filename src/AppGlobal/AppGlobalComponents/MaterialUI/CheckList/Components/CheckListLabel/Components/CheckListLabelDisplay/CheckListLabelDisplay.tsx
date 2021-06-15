import React, {FC} from "react";
import style from "./CheckListLabelDisplay.module.scss"
import {CheckListLabelDisplayProps} from "./CheckListLabelDisplay.types";
import {CheckListLabelDisplayButtons} from "./Components/CheckListLabelDisplayButtons/CheckListLabelDisplayButtons";

export const CheckListLabelDisplay: FC<CheckListLabelDisplayProps> = (props) => {
    const {checklistItemName, enableEditMode} = props;

    return <div className={style.CheckListLabelDisplay}>
        <div className={style.textWrapper}>{checklistItemName}</div>
        <div className={style.buttonsWrapper}>
            <CheckListLabelDisplayButtons
                enableEditMode={enableEditMode}
                deleteFunc={() => {}}
            />
        </div>
    </div>
};

