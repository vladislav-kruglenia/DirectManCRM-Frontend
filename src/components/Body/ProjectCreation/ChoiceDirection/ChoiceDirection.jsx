import React from 'react';
import style from './ChoiceDirection.module.css'
import {NavLink} from "react-router-dom";


let ChoiceDirection = (props) => {
    let directions = props.directions.map(d => <Direction
        changeDirectionStatus={props.changeDirectionStatus}
        key={d.idDirection}
        idDirection={d.idDirection}
        status={d.selected}
        name={d.nameDirection}
    />);

    return <div className={style.bodyContainer}>
        <h3>Выбор направления рекламы</h3>
        {directions}
        <NavLink to={'/project-creation/tariff-plans'}>
            <button>Далее</button>
        </NavLink>
    </div>
};


let Direction = (props) => {
    return <div onClick={() => props.changeDirectionStatus(!props.status, props.idDirection)}>
        {props.name} -
        {`${props.status}`}
    </div>
};

export default ChoiceDirection