import React, {FC} from "react";
import style from "./Instructions.module.scss";
import {InstructionsBody} from "./Components/InstructionsBody/InstructionsBody";
import {InstructionsProps} from "./Instructions.types";
import {useInstructionButtonsCallbacks} from "./Instructions.hooks";
import {useSelector} from "react-redux";
import {getIsSendModeSelector} from "../../../../../../../../../Redux/Reducers/Instructions/Instructions.selectors";
import {SendInstruction} from "./Components/SendInstruction/SendInstruction";

export const Instructions: FC<InstructionsProps> = () => {
    const instructionsButtonsCallbacks = useInstructionButtonsCallbacks();

    const isSendMode = useSelector(getIsSendModeSelector);
    const DisplayComponent = !isSendMode
        ? <InstructionsBody
            instructionButtons={instructionsButtonsCallbacks}
            isReadOnly={false}
            editInstructionText={text => {}}
        />
        : <SendInstruction/>;

    return <div className={style.Instructions}>
        {DisplayComponent}
    </div>
};


