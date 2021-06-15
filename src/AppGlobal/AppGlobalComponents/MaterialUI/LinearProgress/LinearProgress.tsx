import React, {FC} from "react";
import style from "./LinearProgressComponent.module.scss"
import {LinearProgress, Typography} from "@material-ui/core";
import {LinearProgressProps} from "./LinearProgress.types";
import {useReadyChecklistPercentage} from "./LinearProgress.hooks";

export const LinearProgressComponent: FC<LinearProgressProps> = (props) => {
    const readyServicesPercentage = useReadyChecklistPercentage(props.checklistItems);

    return <div className={style.LinearProgressComponent}>
        <Typography component={'div'} variant="body2" color="textSecondary">
            {readyServicesPercentage}%
        </Typography>
        <div className={style.linearProgressContainer}>
            <div className={style.linearProgress}>
                <LinearProgress variant="determinate" value={readyServicesPercentage}/>
            </div>
        </div>
    </div>
};