import React, {FC, useState} from "react";
import style from "./DisplaySendingInstruction.module.scss"
import {useInstructionBodyComponent} from "../../../Instruction/Instruction.hooks";
import {DisplaySendingInstructionProps} from "./DisplaySendingInstruction.types";
import {Paper} from "@material-ui/core";
import {useInstructionsReducerActions} from "../../../../../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";
import {SendInstructionTitle} from "../SendInstructionTitle/SendInstructionTitle";
import SpellcheckIcon from '@material-ui/icons/Spellcheck';

export const DisplaySendingInstruction: FC<DisplaySendingInstructionProps> = (props) => {
    const {instructionMainData} = props;
    const {editInstructionTextAction} = useInstructionsReducerActions();
    const [editMode, setEditMode] = useState(false);

    const {InstructionBodyComponent} = useInstructionBodyComponent({
        editMode,  instructionMainData,
        editInstructionText: instructionText => editInstructionTextAction({instructionText}),
        setEditMode: value => setEditMode(value),
        isReadOnly: false,
    });

    return (
        <div className={style.DisplaySendingInstruction}>
            <SendInstructionTitle titleText={"Проверьте отправляемую инструкцию"} titleIcon={<SpellcheckIcon color={"primary"}/>}/>
            <Paper className={style.instructionBodyComponent}>
                {InstructionBodyComponent}
            </Paper>
        </div>
    )
};