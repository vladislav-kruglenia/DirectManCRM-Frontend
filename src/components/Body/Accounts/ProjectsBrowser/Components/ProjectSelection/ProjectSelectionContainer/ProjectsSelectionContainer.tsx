import React, {FC} from "react";
import style from "./ProjectSelectionContainer.module.scss";
import ProjectsComponentStyle from "../ProjectSelection.module.scss";
import {ProjectMainInfoProps, ProjectsContainerProps} from "./Types/ProjectsContainerTypes";
import {Paper, Typography} from "@material-ui/core";

export let ProjectsSelectionContainer: FC<ProjectsContainerProps> = (props) => {
    if(props.projectsMainData.length === 0) return null;

    const projects = props.projectsMainData.map((projectMainData) => <ProjectMainInfo
        key={projectMainData.projectId}
        projectMainData={projectMainData}
        updateProjectMainData={projectData => props.updateProjectMainData(projectData)}
    />);

    return <Paper className={ProjectsComponentStyle.ProjectsContainer}>
        <Typography variant={'h6'}>{props.title}</Typography>
        {projects}
    </Paper>
};

export let ProjectMainInfo:FC<ProjectMainInfoProps> = (props) => {
    return <div className={style.ProjectMainInfo} onClick={() => {
        props.updateProjectMainData(props.projectMainData)
    }}>
        <div className={style.ProjectName}>{props.projectMainData.projectName}</div>
        <div className={style.ProjectDeadline}>01/06/2021</div>
    </div>;
};

