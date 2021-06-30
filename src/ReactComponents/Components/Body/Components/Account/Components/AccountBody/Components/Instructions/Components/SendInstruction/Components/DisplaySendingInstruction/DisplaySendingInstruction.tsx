import React, {FC, useState} from "react";
import style from "./DisplaySendingInstruction.module.scss"
import {useInstructionBodyComponent} from "../../../Instruction/Instruction.hooks";
import {DisplaySendingInstructionProps} from "./DisplaySendingInstruction.types";
import {Paper, Typography} from "@material-ui/core";

export const DisplaySendingInstruction: FC<DisplaySendingInstructionProps> = (props) => {
    const {editInstructionText, instructionMainData} = props;

    const [editMode, setEditMode] = useState(false);
    const {InstructionBodyComponent} = useInstructionBodyComponent({
        editMode, editInstructionText, instructionMainData,
        setEditMode: value => setEditMode(value),
        isReadOnly: false,
    });

    return (
        <div className={style.DisplaySendingInstruction}>
            <Typography className={style.title}>Проверьте отправляемую инструкцию</Typography>
            <Paper className={style.instructionBodyComponent}>
                {InstructionBodyComponent}
            </Paper>
        </div>
    )
};