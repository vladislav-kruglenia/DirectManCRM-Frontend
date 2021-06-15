import {ProjectStage} from "../../../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";
import Step from "@material-ui/core/Step/Step";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import {ProjectStageTitlesEnum} from "../../Stepper.types";
import React from "react";
import {StepFragment} from "../StepFragment/StepFragment";

export const useStepsComponents = (projectStages: ProjectStage[]) => {
    return projectStages.map((stage: ProjectStage) => {
        const {stageType} = stage;

        return (
            <Step key={stageType} onClick={() => alert(stageType)}>
                <StepLabel>{ProjectStageTitlesEnum[stageType]}</StepLabel>
            </Step>
        )
    });
};


// TODO: React.Fragment не работает
export const useStepsFragments = (projectStages: ProjectStage[]) => {
    return projectStages.map((stage: ProjectStage) => <StepFragment key={stage.stageType} stage={stage}/>);
};

