import React, {FC} from "react";
import style from "./ProjectStatusIndicator.module.scss";
import {ProjectStatus} from "../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";
import {ProjectStatusIndicatorProps} from "./ProjectStatusIndicator.types";

export const ProjectStatusIndicator: FC<ProjectStatusIndicatorProps> = (props) => {
    let indicatorColor = "";
    switch (props.projectStatus) {
        case ProjectStatus.InProgress: {
            indicatorColor = `${style.projectInProgress}`;
            break;
        }
        case ProjectStatus.Managed: {
            indicatorColor = `${style.projectManaged}`;
            break;
        }
        case ProjectStatus.Frozen: {
            indicatorColor = `${style.projectFrozen}`;
            break;
        }
        case ProjectStatus.Completed: {
            indicatorColor = `${style.projectCompleted}`;
            break;
        }
        default:
            return null
    }
    return <div className={`${style.projectStatusIndicator} ${indicatorColor}`}/>
};