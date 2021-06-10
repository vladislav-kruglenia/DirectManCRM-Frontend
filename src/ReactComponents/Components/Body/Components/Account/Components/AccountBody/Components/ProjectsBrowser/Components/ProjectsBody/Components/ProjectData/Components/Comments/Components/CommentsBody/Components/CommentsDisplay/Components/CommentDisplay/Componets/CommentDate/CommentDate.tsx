import React, {FC} from "react";
import style from "./CommentDate.module.scss"
import {Typography} from "@material-ui/core";
import {CommentDateProps} from "./CommentDate.types";

export const CommentDate:FC<CommentDateProps> = (props) => {
    return <Typography component={'div'} variant={"caption"} className={style.CommentDate}>
        {props.date}
    </Typography>
};