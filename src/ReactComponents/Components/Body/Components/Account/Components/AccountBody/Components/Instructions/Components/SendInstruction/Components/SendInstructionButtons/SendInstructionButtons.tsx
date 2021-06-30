import React, {FC} from "react";
import style from "./SendInstructionButtons.module.scss"
import {DisableSendingButton} from "./Components/DisableSendingButton/DisableSendingButton";
import {SendButton} from "./Components/SendButton/SendButton";
import {SendInstructionButtonsProps} from "./SendInstructionButtons.types";
import {useInstructionsReducerActions} from "../../../../../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";

export const SendInstructionButtons: FC<SendInstructionButtonsProps> = (props) => {
    const {instructionMainData} = props;
    const {disableSendModeAction} = useInstructionsReducerActions();
    const disableSendMode = () => disableSendModeAction({});

    return <div className={style.SendInstructionButtons}>
        <DisableSendingButton disableSendMode={disableSendMode}/>
        <SendButton
            instructionMainData={instructionMainData}
            disableSendMode={disableSendMode}
        />
    </div>
};

