import React, {FC} from "react";
import style from "./Deadline.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import EventNoteIcon from '@material-ui/icons/EventNote';
import {DeadlineProps} from "./Deadline.types";

export let Deadline:FC<DeadlineProps> = (props) => {
    return <section className={style.Deadline}>
        <TitleComponent titleIcon={<EventNoteIcon />} titleText={'Сроки выполнения работы'}/>
        <div className={style.deadlinesContainer}>
            <div className={style.dates}>
                <div className={style.date}>
                    <div className={style.dateTitle}>Начали работу:</div>
                    <div className={style.dateValue}>{props.startDate}</div>
                </div>
                <div className={style.date}>
                    <div className={style.dateTitle}>Завершили работу:</div>
                    <div className={style.dateValue}>{props.deadline}</div>
                </div>
            </div>
            <div className={style.numberDays}>Количество дней на работу: {props.numberDaysForProject}</div>
        </div>
    </section>
};