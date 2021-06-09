import React, {FC} from "react";
import style from "../../ProjectNotes.module.scss"
import {Typography} from "@material-ui/core";
import {DisplayProjectNotesProps} from "./DisplayProjectNotes.types";

export const DisplayProjectNotes:FC<DisplayProjectNotesProps> = (props) => {
    return <Typography component={'div'} className={style.DisplayProjectNotes}>
        {props.projectNotes}
    </Typography>
};