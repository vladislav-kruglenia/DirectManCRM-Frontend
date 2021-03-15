import React, {FC} from "react";
import style from "./ProjectNotes.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import NotesIcon from '@material-ui/icons/Notes';
import {Typography} from "@material-ui/core";
import {ProjectNotesProps} from "./ProjectNotes.types";

export let ProjectNotes:FC<ProjectNotesProps> = (props) => {
    return <section className={style.ProjectNotes}>
        <TitleComponent titleIcon={<NotesIcon />} titleText={'Примечания к проекту'}/>
        <Typography component={'div'} className={style.projectNotesContainer}>
            {props.projectNotes}
        </Typography>
    </section>
};

