import style from "./OrderedServices.module.scss";
import React, {useState} from "react";
import {Checkbox, FormControlLabel, FormGroup, LinearProgress, Typography} from "@material-ui/core";
import {TitleComponent} from "../Title/TitleComponent";
import DoneAllIcon from '@material-ui/icons/DoneAll';

export let OrderedServices = () => {
    return <div className={style.ProjectName}>
        <TitleComponent titleIcon={<DoneAllIcon />} titleText={'Заказанные услуги'}/>

        <div className={style.TariffName}>Тариф СТАНДАРТ</div>
        <LinearProgressComponent/>
        <ServicesCheckboxes/>
    </div>
};

export let LinearProgressComponent = () => {
    return <div className={style.LinearProgress}>
        <LinearProgress  variant="determinate" value={40} />
        <Typography variant="body2" color="textSecondary">40%</Typography>
    </div>
};


export let ServicesCheckboxes = () => {
    let [checked, editChecked] = useState(false);

    return <div className={style.ServicesCheckboxes}>
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={()=>{editChecked(!checked)}}
                        name="checkedB"
                        color="primary"
                        size={"small"}
                    />
                }
                label="Яндекс (поиск, рся)"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={()=>{editChecked(!checked)}}
                        name="checkedB"
                        color="primary"
                        size={"small"}
                    />
                }
                label="Гугл (поиск, кмс)"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={()=>{editChecked(!checked)}}
                        name="checkedB"
                        color="primary"
                        size={"small"}
                    />
                }
                label="Елама - сервис экономии на ценах клика"
            />
        </FormGroup>
    </div>
};


