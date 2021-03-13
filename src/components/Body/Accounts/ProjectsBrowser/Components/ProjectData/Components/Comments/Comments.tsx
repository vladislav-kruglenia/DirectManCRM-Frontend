import React from "react";
import style from "./Comments.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

export let Comments = () => {
    // Todo: нужно доделать компоненту Comments на этапе написния бизнес логики
    return <div className={style.ProjectName}>
        <TitleComponent titleIcon={<SpeakerNotesIcon />} titleText={'Комментарии'}/>

    </div>
};

