import React, {FC} from "react";
import style from "./Comments.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import {CommentsBody} from "./Components/CommentsBody/CommentsBody";
import {CommentsProps} from "./Comments.types";

export const Comments:FC<CommentsProps> = (props) => {
    const {comments} = props;

    return <section className={style.ProjectName}>
        <TitleComponent titleIcon={<SpeakerNotesIcon />} titleText={'Комментарии к проекту'}/>
        <CommentsBody comments={comments}/>
    </section>
};


