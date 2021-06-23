import React, {FC} from "react";
import style from "./ViewModeButton.module.scss"
import {Button} from "@material-ui/core";
import {ViewModeButtonProps, ViewModeButtonText} from "./ViewModeButton.types";

export const ViewModeButton:FC<ViewModeButtonProps> = (props) => {
    const {viewMode, editViewMode} = props;
    const buttonText = viewMode ? ViewModeButtonText.OpenMode : ViewModeButtonText.ClosedMode;

    return <div className={style.ViewModeButton}>
        <Button
            variant={"text"}
            className={style.materialButton}
            onClick={() => editViewMode(!viewMode)}
            color={"primary"}
        >
            {buttonText}
        </Button>
    </div>
};