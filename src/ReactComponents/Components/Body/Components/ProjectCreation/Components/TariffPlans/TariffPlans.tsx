import React, {FC} from 'react';
import style from './TariffPlan.module.scss'
import {NavLink} from "react-router-dom";
import {TariffPlanPropsType, TariffPlansPropsType, TariffType} from "./Types/TariffPlansTypes";
import {Button, IconButton, Switch, Typography} from "@material-ui/core";
import {NoDirections, NoTariffs} from "../ProjectEditing/Errors/ErrorsComponents";
import {useDispatch} from "react-redux";
import {IdDirectionAndTariffType} from "../../../../../../../Redux/Reducers/ProjectCreation/Types/ActionCreators.types";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTariff} from "../../../../../../../Redux/Reducers/ProjectCreation/ProjectCreation.reducer.immer";


let TariffPlans: FC<TariffPlansPropsType> = (props) => {
    let directionsWithTariffs = props.tariffsAndNamesDirections.map(tAndD => <TariffPlan
        typeURL={props.typeURL}
        key={tAndD.idDirection}
        nameDirection={tAndD.nameDirection}
        idDirection={tAndD.idDirection}
        namesTariffs={tAndD.namesTariffs}
        changeTariffStatus={props.changeTariffStatus}
    />);
    return <div className={style.TariffPlans}>
        {
            props.tariffsAndNamesDirections.length > 0
                ? directionsWithTariffs
                : <NoDirections
                    typeMainComponent={props.typeURL}
                />
        }
        <div className={style.buttons}>
            <NavLink to={`/${props.typeURL}/choice-direction`}>
                <Button href={''} variant="outlined" color="primary">Назад</Button>
            </NavLink>
            <NavLink to={`/${props.typeURL}/project-editing`}>
                <Button href={''} variant="contained" color="primary">Далее</Button>
            </NavLink>
        </div>

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
    return <div className={style.direction}>
        <Typography className={style.directionTitle} component={'div'} variant={"h5"}>
            {props.nameDirection}
        </Typography>
        <div className={style.tariffs}>
            {props.namesTariffs.length > 0 ? tariffs : <NoTariffs typeMainComponent={props.typeURL}/>}
        </div>
    </div>
};


let Tariff: FC<TariffType> = (props) => {
    let dispatch = useDispatch();
    let deleteTariffFunc = () => {
        let idNumbers: IdDirectionAndTariffType = {
            idDirection: props.idDirection,
            idTariff: props.tariffId
        };
        dispatch(deleteTariff(idNumbers))
    };
    return <div className={style.Tariff}>
        {props.tariffName}
        <div className={style.helpButtons}>
            <Switch
                checked={props.tariffStatus}
                color="primary"
                name="checkedB"
                inputProps={{'aria-label': 'primary checkbox'}}
                onClick={() => props.changeTariffStatus(!props.tariffStatus, props.tariffId, props.idDirection)}
            />
            <IconButton className={style.deleteButton} size={'medium'} href={''} onClick={() => {
                deleteTariffFunc()
            }}>
                <DeleteIcon fontSize={"inherit"}/>
            </IconButton>
        </div>

    </div>
};


export default TariffPlans