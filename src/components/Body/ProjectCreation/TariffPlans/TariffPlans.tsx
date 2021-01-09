import React, {FC} from 'react';
import style from './TariffPlan.module.scss'
import {NavLink} from "react-router-dom";
import {TariffPlanPropsType, TariffPlansPropsType, TariffType} from "./Types/TariffPlansTypes";


let TariffPlans:FC<TariffPlansPropsType> = (props) => {
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
        <NavLink to={`/${props.typeURL}/project-editing`}>
            <button>Далее</button>
        </NavLink>
    </div>
};

let TariffPlan: FC<TariffPlanPropsType> = (props) => {
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
let Tariff: FC<TariffType> = (props) => {
    return <div onClick={() => props.changeTariffStatus(!props.tariffStatus, props.tariffId, props.idDirection)}>
        {props.tariffName} - {`${props.tariffStatus}`}
    </div>
};


export default TariffPlans