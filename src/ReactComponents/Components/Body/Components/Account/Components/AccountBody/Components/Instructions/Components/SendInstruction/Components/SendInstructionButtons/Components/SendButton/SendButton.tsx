import React, {FC} from "react";
import {Button} from "@material-ui/core";
import {SendButtonProps} from "./SendButton.types";
import {useSelector} from "react-redux";
import {getDestinationsSelector} from "../../../../../../../../../../../../../../../Redux/Reducers/Instructions/Instructions.selectors";

export const SendButton:FC<SendButtonProps> = (props) => {
    const {instructionMainData, disableSendMode} = props;
    const destinations = useSelector(getDestinationsSelector);

    const onSendInstruction = () => {
        console.log({instructionMainData, destinations});
        disableSendMode()
    };

    return <div>
        <Button
            variant={"contained"}
            color={"primary"}
            size={"large"}
            onClick={onSendInstruction}
        >
            Отправить
        </Button>
    </div>
};