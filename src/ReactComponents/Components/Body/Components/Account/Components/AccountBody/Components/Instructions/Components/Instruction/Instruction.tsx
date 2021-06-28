import React, {FC, useState} from "react";
import style from "./Instruction.module.scss"
import {Paper} from "@material-ui/core";
import {InstructionProps, UseInstructionComponentsDTO} from "./Instruction.types";
import {useInstructionBodyComponent, useInstructionHeaderComponent} from "./Instruction.hooks";

export const Instruction: FC<InstructionProps> = (props) => {
    const [editMode, setEditMode] = useState(false);

    const dto: UseInstructionComponentsDTO = {...props, editMode, setEditMode};

    const {InstructionHeaderComponent} = useInstructionHeaderComponent(dto);
    const {InstructionBodyComponent} = useInstructionBodyComponent(dto);


    return <Paper className={style.Instruction}>
        {InstructionHeaderComponent}
        {InstructionBodyComponent}
    </Paper>
};





