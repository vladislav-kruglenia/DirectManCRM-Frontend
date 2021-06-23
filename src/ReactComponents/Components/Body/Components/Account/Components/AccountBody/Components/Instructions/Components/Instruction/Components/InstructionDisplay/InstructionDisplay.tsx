import React, {FC, useState} from "react";
import style from "./InstructionDisplay.module.scss"
import {InstructionDisplayProps} from "./InstructionDisplay.types";
import {InstructionText} from "./Components/InstructionText/InstructionText";
import {ViewModeButton} from "./Components/ViewModeButton/ViewModeButton";

export const InstructionDisplay:FC<InstructionDisplayProps> = (props) => {
    const {instructionText} = props;
    const [viewMode, editViewMode] = useState(false);

    return <div className={style.InstructionDisplay}>
        <InstructionText text={instructionText} isViewMode={viewMode}/>
        <ViewModeButton viewMode={viewMode} editViewMode={editViewMode} />
    </div>
};



