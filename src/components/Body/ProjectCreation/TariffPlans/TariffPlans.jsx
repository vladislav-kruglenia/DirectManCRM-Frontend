import React from 'react';
import style from './TariffPlan.module.css'
import {NavLink} from "react-router-dom";


let TariffPlans = (props) => {
    let directionsWithTariffs = props.tariffsAndNamesDirections.map(tAndD => <TariffPlan
        nameDirection={tAndD.nameDirection}
        namesTariffs={tAndD.namesTariffs}
    />);
    return <div className={style.bodyContainer}>
        {directionsWithTariffs}
        <NavLink to={'/project-creation/project-editing'}>
            <button>Далее</button>
        </NavLink>
    </div>
};
let TariffPlan = (props) => {
    let tariffs = props.namesTariffs.map(t => <Tariff tariffName={t.tariffName}/>);
    return <>
        <h3>{props.nameDirection}</h3>
        {tariffs}
    </>
};
let Tariff = (props) => {
    return<div>
        {props.tariffName}
    </div>
};


export default TariffPlans