import React, {FC} from "react";
import style from "./Errors.module.scss"
import {Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {NoDirectionsPropsTypes} from "./Types/NoDirectionsTypes";
import {ProjectCreationPages} from "../../../../../AppGlobalTypes/TypesComponents";

export let NoDirections: FC<NoDirectionsPropsTypes> = (props) => {
    return <div className={style.Error}>
        <Typography component={'div'} variant={"h5"} color={'error'}>
            Нет выбранных направлений
        </Typography>
        Выберите направление рекламы <NavLink
        to={`/${props.typeMainComponent}/${ProjectCreationPages.choiceDirection}`}>
        здесь
    </NavLink>
    </div>
};

export let NoTariffs: FC<NoDirectionsPropsTypes> = (props) => {
    return <div className={style.Error}>
        <Typography component={'div'} variant={"h5"} color={'error'}>
            Нет выбранных тарифов
        </Typography>
        <NavLink to={`/${props.typeMainComponent}/${ProjectCreationPages.projectEditing}`}>
            Создайте тариф,
        </NavLink>
        или выберите его
        <NavLink to={`/${props.typeMainComponent}/${ProjectCreationPages.tariffPlans}`}>
            здесь
        </NavLink>
    </div>
};

export let NoContacts: FC = () => {
    return <Typography variant={'h5'} color={'error'} component={'div'}>
        Контактов нет
    </Typography>
};