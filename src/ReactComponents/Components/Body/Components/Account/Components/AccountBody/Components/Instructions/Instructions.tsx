import React, {FC} from "react";
import style from "./Instructions.module.scss";
import {InstructionsBody} from "./Components/InstructionsBody/InstructionsBody";
import {InstructionsProps} from "./Instructions.types";
import {useInstructionButtonsCallbacks} from "./Instructions.hooks";

export const Instructions:FC<InstructionsProps> = () => {
    const instructionsButtonsCallbacks = useInstructionButtonsCallbacks();

    return <div className={style.Instructions}>
        <InstructionsBody instructionButtons={instructionsButtonsCallbacks}/>
    </div>
};

