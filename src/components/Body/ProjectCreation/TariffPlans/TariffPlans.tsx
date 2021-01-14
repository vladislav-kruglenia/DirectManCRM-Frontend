import React, {FC} from 'react';
import style from './TariffPlan.module.scss'
import {NavLink} from "react-router-dom";
import {TariffPlanPropsType, TariffPlansPropsType, TariffType} from "./Types/TariffPlansTypes";
import {Button, Switch, Typography} from "@material-ui/core";


let TariffPlans: FC<TariffPlansPropsType> = (props) => {
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
        <NavLink to={`/${props.typeURL}/choice-direction`}>
            <Button href={''} variant="outlined" color="primary">Назад</Button>
        </NavLink>
        <NavLink to={`/${props.typeURL}/project-editing`}>
            <Button href={''} variant="contained" color="primary">Далее</Button>
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
        <Typography className={`${style.ChoiceDirectionTitle}`} component={'div'} variant={"h5"}>
            {props.nameDirection}
        </Typography>
        {tariffs}
    </>
};
let Tariff: FC<TariffType> = (props) => {
    return <div onClick={() => props.changeTariffStatus(!props.tariffStatus, props.tariffId, props.idDirection)}>
        {props.tariffName}
        <Switch
            checked={props.tariffStatus}
            color="primary"
            name="checkedB"
            inputProps={{'aria-label': 'primary checkbox'}}
        />
    </div>
};


export default TariffPlans