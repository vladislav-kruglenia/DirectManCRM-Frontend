import React from 'react';
import style from './TariffPlan.module.scss'
import {NavLink} from "react-router-dom";


let TariffPlans = (props) => {
    let directionsWithTariffs = props.tariffsAndNamesDirections.map(tAndD => <TariffPlan
        key={tAndD.idDirection}
        nameDirection={tAndD.nameDirection}
        idDirection={tAndD.idDirection}
        namesTariffs={tAndD.namesTariffs}
        changeTariffStatus={props.changeTariffStatus}
    />);
    return <div className={style.tariffPlansContainer}>
        {props.tariffsAndNamesDirections.length > 0
            ? directionsWithTariffs
            : <div>Нет выбранных направлений</div>}
        <NavLink to={'/project-creation/project-editing'}>
            <button>Далее</button>
        </NavLink>
    </div>
};

// значение key устанавливать как index - не лучшая практика.
// это нужно поменять после того, как определимся с индексами на бекенде

let TariffPlan = (props) => {
    let tariffs = props.namesTariffs.map((t) => <Tariff
        key={t.tariffId}
        tariffName={t.tariffName}
        tariffStatus={t.tariffStatus}
        tariffId={t.tariffId}
        idDirection={props.idDirection}
        changeTariffStatus={props.changeTariffStatus}
    />);
    return <>
        <h3>{props.nameDirection}</h3>
        {tariffs}
    </>
};
let Tariff = (props) => {
    return <div onClick={() => props.changeTariffStatus(!props.tariffStatus, props.tariffId, props.idDirection)}>
        {props.tariffName} - {`${props.tariffStatus}`}
    </div>
};


export default TariffPlans