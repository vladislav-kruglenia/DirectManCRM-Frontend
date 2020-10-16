import React from 'react';
import style from './ChoiceDirection.module.css'
import {NavLink} from "react-router-dom";


let ChoiceDirection = (props) => {
    let directions = props.directions.map((d, index) => <Direction changeDirectionStatus={props.changeDirectionStatus}
                                                                   key={d.nameDirection}
                                                                   status={d.selected}
                                                                   index={index}
                                                                   name={d.nameDirection}/>);

    return <div className={style.bodyContainer}>
        <h3>Выбор направления рекламы</h3>
        {directions}
        <NavLink to={'/project-creation/tariff-plans'}>
            <button>Далее</button>
        </NavLink>
    </div>
};



let Direction = (props) => {
    return <div onClick={() => props.changeDirectionStatus(!props.status, props.index)}>
        {props.name} -
        {`${props.status}`}
    </div>
};

export default ChoiceDirection