import React, {FC} from "react";
import style from "./InstructionHeader.module.scss"
import {TypeInstruction} from "./Components/TypeInstruction/TypeInstruction";
import {InstructionButtonsBody} from "./Components/InstructionButtonsBody/InstructionButtonsBody";
import {InstructionHeaderProps} from "./InstructionHeader.types";

export const InstructionHeader:FC<InstructionHeaderProps> = (props) => {
    const {instructionButtons} = props;

    return <div className={style.InstructionHeader}>
        <TypeInstruction/>
        <InstructionButtonsBody instructionButtons={instructionButtons}/>
    </div>
};


