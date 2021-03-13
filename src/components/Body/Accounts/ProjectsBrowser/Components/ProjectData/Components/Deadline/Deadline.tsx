import React from "react";
import style from "./Deadline.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import EventNoteIcon from '@material-ui/icons/EventNote';

export let Deadline = () => {
    return <section className={style.Deadline}>
        <TitleComponent titleIcon={<EventNoteIcon />} titleText={'Сроки выполнения работы'}/>
        <div className={style.dates}>
            <div className={style.StartDate}>Начали работу: 01.09.2020</div>
            <div className={style.FinishDate}>Завершили работу: 01.09.2020</div>
        </div>
    </section>
};

