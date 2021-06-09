import React, {FC} from "react";
import style from "./OrderedServices.module.scss";
import {Typography} from "@material-ui/core";
import {TitleComponent} from "../Title/TitleComponent";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {OrderedServicesProps} from "./OrderedServices.types";
import {LinearProgressComponent} from "./Components/LinearProgress/LinearProgress";
import {CheckList} from "./Components/CheckList/CheckList";

export const OrderedServices: FC<OrderedServicesProps> = (props) => {
    const {services, tariffName} = props;

    return <section className={style.OrderedServices}>
        <TitleComponent titleIcon={<DoneAllIcon/>} titleText={'Заказанные услуги'}/>
        <div className={style.orderedServicesContainer}>
            <Typography component={'div'} className={style.tariffName}>{tariffName}</Typography>
            <LinearProgressComponent services={services}/>
            <CheckList services={services}/>
        </div>
    </section>
};




