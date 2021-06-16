import ProjectsSelectionStyle from "../../../ProjectSelection.module.scss";
import {Typography} from "@material-ui/core";
import React from "react";

export const ProjectMainInfoTitles = () => {
    return <div className={ProjectsSelectionStyle.ProjectMainInfoTitles}>
        <div className={ProjectsSelectionStyle.ProjectName}>
            <Typography component={'div'} className={ProjectsSelectionStyle.titleProjectMainInfo}>Название
                проекта</Typography>
        </div>
        <div className={ProjectsSelectionStyle.ProjectDeadline}>
            <Typography component={'div'} className={ProjectsSelectionStyle.titleProjectMainInfo}>Дата окончания
                работы</Typography>
        </div>
    </div>
};