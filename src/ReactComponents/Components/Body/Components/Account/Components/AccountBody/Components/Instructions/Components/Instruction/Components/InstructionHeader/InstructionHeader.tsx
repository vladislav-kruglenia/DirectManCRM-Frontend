import React, {FC} from "react";
import style from "./InstructionHeader.module.scss"
import {TypeInstruction} from "./Components/TypeInstruction/TypeInstruction";
import {InstructionButtonsBody} from "./Components/InstructionButtonsBody/InstructionButtonsBody";
import {InstructionHeaderProps} from "./InstructionHeader.types";

export const InstructionHeader:FC<InstructionHeaderProps> = (props) => {
    const {instructionButtons, instructionMainData} = props;

    return <div className={style.InstructionHeader}>
        <TypeInstruction typeInstruction={instructionMainData.typeInstructions}/>
        <InstructionButtonsBody
            instructionMainData={instructionMainData}
            instructionButtons={instructionButtons}
        />
    </div>
};


