import React, {FC} from "react";
import style from "./InstructionText.module.scss"
import {MarkdownComponent} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MarkdownComponent/MarkdownComponent";
import {InstructionTextProps} from "./InstructionText.types";

export const InstructionText:FC<InstructionTextProps> = (props) => {
    const {text, isViewMode} = props;
    const modeStyle = isViewMode ? style.openMode : style.closedMode;

    return <div className={`${modeStyle}`}>
        <MarkdownComponent text={text}/>
    </div>
};