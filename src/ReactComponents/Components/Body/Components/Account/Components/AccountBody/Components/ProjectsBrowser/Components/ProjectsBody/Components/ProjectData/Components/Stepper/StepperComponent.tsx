import React, {FC} from "react";
import style from "./Stepper.module.scss";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TimelineIcon from '@material-ui/icons/Timeline';
import {TitleComponent} from "../Title/TitleComponent";
import {HorizontalLinearStepperProps, ProjectStageTitlesEnum, StepperProps} from "./Stepper.types";
import {ProjectStage} from "../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";


export const StepperComponent: FC<StepperProps> = (props) => {
    return <section className={style.ProjectName}>
        <TitleComponent titleIcon={<TimelineIcon/>} titleText={'Этапы выполнения работы'}/>
        <HorizontalLinearStepper projectStages={props.projectStages}/>
    </section>
};

export function HorizontalLinearStepper(props: HorizontalLinearStepperProps) {
    const steps = props.projectStages.map((stage: ProjectStage) => (
        <Step key={stage.stageType} completed={stage.isActive}>
            <StepLabel>{ProjectStageTitlesEnum[stage.stageType]}</StepLabel>
        </Step>
    ));

    return (
        <Stepper alternativeLabel className={style.Stepper}>
            {steps}
        </Stepper>
    );
}



