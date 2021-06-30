import React, {FC} from "react";
import {AddDestinationWindowProps} from "./AddDestinationWindow.types";
import {Button} from "@material-ui/core";

export const AddDestinationWindow:FC<AddDestinationWindowProps> = (props) => {
    const {addNewDestination, exitEditMode} = props;
    const onAddDestination = () => {
        addNewDestination();
        exitEditMode();
    };

    return <div>
        <Button
            variant={"contained"}
            onClick={onAddDestination}
            color={"primary"}
        >
            Выбрать
        </Button>
    </div>
};