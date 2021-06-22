import {MarkdownComponent} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MarkdownComponent/MarkdownComponent";
import React, {FC} from "react";
import {InstructionDisplayProps} from "./InstructionDisplay.types";

export const InstructionDisplay:FC<InstructionDisplayProps> = (props) => {
    const {instructionText} = props;

    return <div>
        <MarkdownComponent text={instructionText}/>
    </div>
};