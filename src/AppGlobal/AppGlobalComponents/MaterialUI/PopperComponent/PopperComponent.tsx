import React, {FC} from "react";
import {Paper, Popper} from "@material-ui/core";
import {PopperComponentProps} from "./PopperComponent.types";

export const PopperComponent:FC<PopperComponentProps> = (props) => {
    const {anchorEl} = props;

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return <React.Fragment>
        <Popper id={id} open={open} anchorEl={anchorEl} placement={"bottom-start"   }>
            <Paper>The content of the Popper.</Paper>
        </Popper>
    </React.Fragment>
};

