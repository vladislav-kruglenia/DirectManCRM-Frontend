import {Typography} from "@material-ui/core";
import React, {FC} from "react";
import {ErrorComponentProps} from "./Types/ErrorComponentTypes";

export let ErrorComponent:FC<ErrorComponentProps> = ({variant, children}) => {
    return <Typography component={"span"} variant={variant} color={"error"}>{children}</Typography>
};