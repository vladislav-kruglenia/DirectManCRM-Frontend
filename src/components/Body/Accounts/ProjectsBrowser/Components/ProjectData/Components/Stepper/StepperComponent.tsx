import React, {useState} from "react";
import style from "./Stepper.module.scss";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';


export let StepperComponent = () => {
    return <div className={style.ProjectName}>
        <HorizontalLinearStepper/>
    </div>
};

export function HorizontalLinearStepper() {
    const [activeStep/*, setActiveStep*/] = useState(0);
    // const [skipped/*, setSkipped*/] = useState(new Set<number>());

    /*const isStepOptional = (step: number) => {
        return step === 1;
    };*/

    /*const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };*/
    return (
        <Stepper alternativeLabel className={style.Stepper} activeStep={activeStep}>
            <Step completed={true}>
                <StepLabel>Заполнение брифа</StepLabel>
            </Step>
            <Step completed={false}>
                <StepLabel>Настройка рекламы</StepLabel>
            </Step>
            <Step completed={false}>
                <StepLabel>Настройка завершена</StepLabel>
            </Step>
            <Step completed={false}>
                <StepLabel>Ведение рекламы</StepLabel>
            </Step>
        </Stepper>
    );
}


