import React from 'react';
import style from './ChoiceDirection.module.css'
import {NavLink} from "react-router-dom";


let ChoiceDirection = () => {
    return <div className={style.bodyContainer}>
        <h3>Выбор направления рекламы</h3>

        <div>Контекстная реклама</div>
        <div>Реклама в соцсетях</div>
        <div>Реклама на Ютуб</div>

        <NavLink to={'/project-creation/tariff-plans'}>
            <button>Далее</button>
        </NavLink>
    </div>
};

export default ChoiceDirection