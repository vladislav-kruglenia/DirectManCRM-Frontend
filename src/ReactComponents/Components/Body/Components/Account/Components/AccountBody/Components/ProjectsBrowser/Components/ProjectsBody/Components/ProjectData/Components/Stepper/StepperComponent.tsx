import React, {FC} from "react";
import style from "./Stepper.module.scss";
import TimelineIcon from '@material-ui/icons/Timeline';
import {TitleComponent} from "../Title/TitleComponent";
import {StepperProps} from "./Stepper.types";
import {StepperBody} from "./Componets/StepperBody/StepperBody";


export const StepperComponent: FC<StepperProps> = (props) => {
    return <section className={style.ProjectName}>
        <TitleComponent titleIcon={<TimelineIcon/>} titleText={'Этапы выполнения работы'}/>
        <StepperBody projectStages={props.projectStages}/>
    </section>
};




