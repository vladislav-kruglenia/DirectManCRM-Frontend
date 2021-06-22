import React from "react";
import style from "./Instructions.module.scss";
import {InstructionsBody} from "./Components/InstructionsBody/InstructionsBody";

export const Instructions = () => {

    return <div className={style.Instructions}>
        <InstructionsBody/>
    </div>
};

