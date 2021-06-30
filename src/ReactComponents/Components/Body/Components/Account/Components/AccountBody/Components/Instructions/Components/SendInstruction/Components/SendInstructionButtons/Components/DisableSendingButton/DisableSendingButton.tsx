import React, {FC} from "react";
import {Button} from "@material-ui/core";
import {DisableSendingButtonProps} from "./DisableSendingButton.types";

export const DisableSendingButton:FC<DisableSendingButtonProps> = (props) => {
    const {disableSendMode} = props;

    return <div>
        <Button
            variant={"outlined"}
            size={"large"}
            onClick={disableSendMode}
        >
            Отменить
        </Button>
    </div>
};