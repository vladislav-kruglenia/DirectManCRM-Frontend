import React, {FC} from "react";
import style from "./Instruction.module.scss"
import {Paper} from "@material-ui/core";
import {InstructionDisplay} from "./Components/InstructionDisplay/InstructionDisplay";
import {InstructionProps} from "./Instruction.types";

export const Instruction:FC<InstructionProps> = (props) => {
    const {instructionText} = props;

    return <Paper className={style.Instruction}>
        <InstructionDisplay instructionText={instructionText}/>
        {/*<FormInstruction/>*/}
    </Paper>
};





