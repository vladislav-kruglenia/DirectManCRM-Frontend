import React, {FC} from "react";
import {Instruction} from "../Instruction/Instruction";
import {InstructionsBodyProps, InstructionMainData} from "./InstructionsBody.types";
import {InstructionsBodyData} from "./InstructionsBody.data";


export const InstructionsBody:FC<InstructionsBodyProps> = (props) => {
    const {instructionButtons, isReadOnly, editInstructionText} = props;

    const InstructionsArr = InstructionsBodyData.map((item: InstructionMainData) => {
        const {typeInstructions, instructionId, instructionText} = item;

        return <Instruction
            key={item.instructionId}
            instructionMainData={{typeInstructions, instructionId, instructionText}}
            instructionButtons={instructionButtons}
            isReadOnly={isReadOnly}
            editInstructionText={editInstructionText}
        />
});

    return <div>
        {InstructionsArr}
    </div>
};



