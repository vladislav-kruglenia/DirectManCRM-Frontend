import React, {FC} from 'react';
import style from './Styles/ChoiceDirection.module.css'
import {NavLink} from "react-router-dom";
import {ChoiceDirectionPropsType, DirectionPropsType} from "./Types/ChoiceDirectionTypes";
import {Button, Switch, Typography} from "@material-ui/core";


export let ChoiceDirection: FC<ChoiceDirectionPropsType> = (props) => {
    let directions = props.directions.map(d => <Direction
        changeDirectionStatus={props.changeDirectionStatus}
        key={d.idDirection}
        idDirection={d.idDirection}
        status={d.selected}
        name={d.nameDirection}
    />);

    return <div className={style.bodyContainer}>
        <Typography className={`${style.ChoiceDirectionTitle}`} component={'div'} variant={"h5"}>
            Выбор направления рекламы
        </Typography>
        {directions}
        <NavLink to={`/${props.typeURL}/tariff-plans`}>
            {/*<button>Далее</button>*/}
            <Button href={''} variant="contained" color="primary">Далее</Button>
        </NavLink>
    </div>
};


let Direction: FC<DirectionPropsType> = (props) => {
    return <div onClick={() => props.changeDirectionStatus(!props.status, props.idDirection)}>
        {props.name}
        <Switch
            checked={props.status}
            color="primary"
            name="checkedB"
            inputProps={{'aria-label': 'primary checkbox'}}
        />
    </div>
};

