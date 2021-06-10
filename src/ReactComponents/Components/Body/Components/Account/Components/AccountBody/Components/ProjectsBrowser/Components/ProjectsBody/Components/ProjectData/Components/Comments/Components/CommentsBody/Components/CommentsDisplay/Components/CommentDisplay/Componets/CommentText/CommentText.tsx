import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {CommentTextProps} from "./CommentText.types";

export const CommentText:FC<CommentTextProps> = (props) => {
    return <Typography>{props.text}</Typography>
};