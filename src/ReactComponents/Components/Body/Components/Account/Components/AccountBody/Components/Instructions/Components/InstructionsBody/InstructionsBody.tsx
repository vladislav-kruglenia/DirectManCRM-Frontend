import React, {FC} from "react";
import {Instruction} from "../Instruction/Instruction";
import {instruction1} from "../../../../../../../../../../../texts/instructions1"
import {instruction2} from "../../../../../../../../../../../texts/instructions2"
import {InstructionsBodyProps} from "./InstructionsBody.types";


export const InstructionsBody:FC<InstructionsBodyProps> = (props) => {
    const {instructionButtons, isReadOnly} = props;


    return <div>
        <Instruction
            instructionText={instruction1}
            instructionButtons={instructionButtons}
            isReadOnly={isReadOnly}
        />
        <Instruction
            instructionText={instruction2}
            instructionButtons={instructionButtons}
            isReadOnly={isReadOnly}
        />
    </div>
};

