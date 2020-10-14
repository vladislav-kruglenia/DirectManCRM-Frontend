import React from 'react';
import style from './TariffPlan.module.css'
import {NavLink} from "react-router-dom";


let TariffPlans = () => {
    return <div className={style.bodyContainer}>
        <h3>Тарифный план</h3>
        <div>План1</div>
        <div>План2</div>
        <div>План3</div>
        <NavLink to={'/project-creation/project-editing'}>
            <button>Оформить заказ</button>
        </NavLink>
    </div>
};

export default TariffPlans