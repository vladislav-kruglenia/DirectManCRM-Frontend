import React, {FC} from "react";
import style from "./Instruction.module.scss"
import {Paper} from "@material-ui/core";
import {InstructionDisplay} from "./Components/InstructionDisplay/InstructionDisplay";
import {InstructionProps} from "./Instruction.types";
import {InstructionHeader} from "./Components/InstructionHeader/InstructionHeader";

export const Instruction:FC<InstructionProps> = (props) => {
    const {instructionText, instructionButtons, isReadOnly} = props;
    const InstructionHeaderComponent = !isReadOnly && <InstructionHeader instructionButtons={instructionButtons}/>;

    return <Paper className={style.Instruction}>
        {InstructionHeaderComponent}
        <InstructionDisplay instructionText={instructionText}/>
        {/*<FormInstruction/>*/}
    </Paper>
};





