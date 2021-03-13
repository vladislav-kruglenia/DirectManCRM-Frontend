import React from "react";
import style from "./Deadline.module.scss";

export let Deadline = () => {
    return <div className={style.Deadline}>

        <div className={style.NumberDays}>Количество дней на настройку: 10</div>
        <div className={style.StartDate}>Начали работу: 01.09.2020</div>
        <div className={style.FinishDate}>Завершили работу: 01.09.2020</div>
    </div>
};

