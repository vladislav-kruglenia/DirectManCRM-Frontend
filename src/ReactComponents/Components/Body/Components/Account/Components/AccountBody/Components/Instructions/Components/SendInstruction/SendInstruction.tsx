import React from "react";
import {Paper} from "@material-ui/core";
import {Destinations} from "./Components/Destinations/Destinations";
import {DisplaySendingInstruction} from "./Components/DisplaySendingInstruction/DisplaySendingInstruction";
import {SendInstructionButtons} from "./Components/SendInstructionButtons/SendInstructionButtons";

export const SendInstruction = () => {
    return <Paper>
        <Destinations/>
        <DisplaySendingInstruction/>
        <SendInstructionButtons/>
    </Paper>
};


