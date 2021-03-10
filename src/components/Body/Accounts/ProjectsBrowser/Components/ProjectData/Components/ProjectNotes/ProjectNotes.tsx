import style from "./ProjectNotes.module.scss";
import React from "react";
import {TitleComponent} from "../Title/TitleComponent";
import NotesIcon from '@material-ui/icons/Notes';


export let ProjectNotes = () => {
    return <div className={style.ProjectName}>
        <TitleComponent titleIcon={<NotesIcon />} titleText={'Примечания к проекту'}/>
        Заказали контекст стандарт плюс отдельные
        объявления и кампании для рся/кмс
        (5 товаров, на каждый товар по одной кампании на поиске и по одной на рся/кмс)
    </div>
};

