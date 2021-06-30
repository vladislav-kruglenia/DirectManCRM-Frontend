import React, {FC} from "react";
import style from "./InstructionButtonsBody.module.scss"
import {
    CloneButton,
    DeleteButton,
    EditButton, OutlinedButton
} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {InstructionButtonsBodyProps} from "./InstructionButtonsBody.types";

export const InstructionButtonsBody: FC<InstructionButtonsBodyProps> = (props) => {
    const {instructionId, instructionText, typeInstructions} = props.instructionMainData;
    const {
        editInstruction, cloneInstruction, deleteInstruction, sendInstruction,
    } = props.instructionButtons;

    return <div className={style.InstructionButtonsBody}>
        <div className={style.button}>
            <EditButton
                onClickFunc={editInstruction}
            />
        </div>
        <div className={style.button}>
            <CloneButton
                onClickFunc={cloneInstruction}
            />
        </div>
        <div className={style.button}>
            <DeleteButton
                onClickFunc={deleteInstruction}
            />
        </div>
        <div className={style.button}>
            <OutlinedButton
                buttonText={"Отправить"}
                onClickFunc={() => sendInstruction({instructionId, instructionText, typeInstructions})}
            />
        </div>
    </div>
};