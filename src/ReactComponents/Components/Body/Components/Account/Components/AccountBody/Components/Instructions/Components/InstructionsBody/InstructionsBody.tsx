import React from "react";
import {Instruction} from "../Instruction/Instruction";
import {instruction1} from "../../../../../../../../../../../texts/instructions1"
import {instruction2} from "../../../../../../../../../../../texts/instructions2"


export const InstructionsBody = () => {


    return <div>
        <Instruction instructionText={instruction1}/>
        <Instruction instructionText={instruction2}/>
    </div>

};

