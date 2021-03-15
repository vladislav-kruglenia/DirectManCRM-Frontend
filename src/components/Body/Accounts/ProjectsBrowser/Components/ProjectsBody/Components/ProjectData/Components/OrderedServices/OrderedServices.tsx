import React, {FC, useState} from "react";
import style from "./OrderedServices.module.scss";
import {Checkbox, FormControlLabel, FormGroup, LinearProgress, Typography} from "@material-ui/core";
import {TitleComponent} from "../Title/TitleComponent";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {LinearProgressProps, OrderedServicesProps, ServicesCheckboxesProps} from "./OrderedServices.types";
import {OrderedService} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";
import {useReadyServicesPercentage} from "./OrderedServices.hooks";

export let OrderedServices: FC<OrderedServicesProps> = (props) => {
    const readyServicesPercentage = useReadyServicesPercentage(props.services);

    return <section className={style.OrderedServices}>
        <TitleComponent titleIcon={<DoneAllIcon/>} titleText={'Заказанные услуги'}/>
        <div className={style.orderedServicesContainer}>
            <Typography component={'div'} className={style.tariffName}>{props.tariffName}</Typography>
            <LinearProgressComponent readyServicesPercentage={readyServicesPercentage}/>
            <ServicesCheckboxes services={props.services}/>
        </div>
    </section>
};

export let LinearProgressComponent: FC<LinearProgressProps> = (props) => {
    return <div className={style.LinearProgressComponent}>
        <Typography component={'div'} variant="body2"
                    color="textSecondary">{props.readyServicesPercentage}%</Typography>
        <div className={style.linearProgressContainer}>
            <div className={style.linearProgress}>
                <LinearProgress variant="determinate" value={props.readyServicesPercentage}/>
            </div>
        </div>
    </div>
};


export let ServicesCheckboxes: FC<ServicesCheckboxesProps> = (props) => {
    let [checked, editChecked] = useState(false);

    const formControlLabels = props.services.map((service: OrderedService) => (
        <FormControlLabel
            key={service.serviceName}
            control={
                <Checkbox
                    checked={checked}
                    onChange={() => {
                        editChecked(!checked)
                    }}
                    name="checkedB"
                    color="primary"
                    size={"small"}
                />
            }
            label={service.serviceName}
        />));

    return <div className={style.ServicesCheckboxes}>
        <FormGroup>
            {formControlLabels}
        </FormGroup>
    </div>
};




