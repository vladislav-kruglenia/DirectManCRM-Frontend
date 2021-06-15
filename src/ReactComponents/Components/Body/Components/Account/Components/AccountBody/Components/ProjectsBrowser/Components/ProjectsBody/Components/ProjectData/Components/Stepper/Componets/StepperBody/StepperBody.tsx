import React from "react";
import style from "../../Stepper.module.scss";
import {HorizontalLinearStepperProps} from "../../Stepper.types";
import Stepper from "@material-ui/core/Stepper";
import {useStepsComponents} from "./StepperBody.hooks";

export function StepperBody(props: HorizontalLinearStepperProps) {
    const {projectStages} = props;
    const steps = useStepsComponents(projectStages);

    return (
        <Stepper alternativeLabel activeStep={3} className={style.Stepper}>
            {steps}
        </Stepper>
    );
}