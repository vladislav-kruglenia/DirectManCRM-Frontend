import React from "react";
import style from "./SendInstruction.module.scss"
import {Divider, Paper} from "@material-ui/core";
import {Destinations} from "./Components/Destinations/Destinations";
import {DisplaySendingInstruction} from "./Components/DisplaySendingInstruction/DisplaySendingInstruction";
import {SendInstructionButtons} from "./Components/SendInstructionButtons/SendInstructionButtons";
import {useSelector} from "react-redux";
import {getInstructionMainDataSelector} from "../../../../../../../../../../../Redux/Reducers/Instructions/Instructions.selectors";

export const SendInstruction = () => {
    const instructionMainData = useSelector(getInstructionMainDataSelector);

    return <Paper className={style.SendInstruction}>
        <Destinations/>
        <Divider/>
        <DisplaySendingInstruction instructionMainData={instructionMainData}/>
        <SendInstructionButtons instructionMainData={instructionMainData}/>
    </Paper>
};


