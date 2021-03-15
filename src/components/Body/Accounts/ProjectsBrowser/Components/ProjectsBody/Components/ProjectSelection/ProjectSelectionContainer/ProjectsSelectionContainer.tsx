import React, {FC} from "react";
import ProjectsSelectionStyle from "../ProjectSelection.module.scss";
import {ProjectMainInfoProps, ProjectsContainerProps} from "./Types/ProjectsContainerTypes";
import {Paper, Typography} from "@material-ui/core";
import {MainProjectData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";

export let ProjectsSelectionContainer: FC<ProjectsContainerProps> = (props) => {
    if(props.projectsMainData.length === 0) return null;

    const projects = props.projectsMainData.map((projectMainData: MainProjectData) => <ProjectMainInfo
        key={projectMainData.projectId}
        projectMainData={projectMainData}
        updateProjectMainData={projectData => props.updateProjectMainData(projectData)}
    />);

    return <Paper className={ProjectsSelectionStyle.ProjectsContainer}>
        <Typography className={ProjectsSelectionStyle.projectsSelectionContainerTitle}
                    component={'div'} variant={'h6'}>
            {props.title}
        </Typography>
        <ProjectMainInfoTitles/>
        {projects}
    </Paper>
};

export let ProjectMainInfo:FC<ProjectMainInfoProps> = (props) => {
    return <div className={ProjectsSelectionStyle.ProjectMainInfo} onClick={() => {
        props.updateProjectMainData(props.projectMainData)
    }}>
        <div className={ProjectsSelectionStyle.ProjectName}>{props.projectMainData.projectName}</div>
        <div className={ProjectsSelectionStyle.ProjectDeadline}>{props.projectMainData.deadline}</div>
    </div>;
};


export let ProjectMainInfoTitles = () => {
    return <div className={ProjectsSelectionStyle.ProjectMainInfoTitles}>
        <div className={ProjectsSelectionStyle.ProjectName}>
            <Typography component={'div'} className={ProjectsSelectionStyle.titleProjectMainInfo}>Название проекта</Typography>
        </div>
        <div className={ProjectsSelectionStyle.ProjectDeadline}>
            <Typography component={'div'} className={ProjectsSelectionStyle.titleProjectMainInfo}>Дата окончания работы</Typography>
        </div>
    </div>
};