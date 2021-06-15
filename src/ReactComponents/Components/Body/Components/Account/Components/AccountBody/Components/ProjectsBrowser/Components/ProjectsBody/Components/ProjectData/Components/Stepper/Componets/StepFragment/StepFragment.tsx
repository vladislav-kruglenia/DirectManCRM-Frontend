import React, {FC} from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {ProjectStageTitlesEnum} from "../../Stepper.types";
import {StepFragmentProps} from "./StepFragment.types";

export const StepFragment:FC<StepFragmentProps> = (props) => {
    const {stageType} = props.stage;

    return <React.Fragment>
        <Step onClick={() => {alert(stageType)}}>
            <StepLabel>{ProjectStageTitlesEnum[stageType]}</StepLabel>
        </Step>
    </React.Fragment>
};