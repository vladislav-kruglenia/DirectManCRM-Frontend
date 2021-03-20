import React, {FC} from "react";
import ProjectsSelectionStyle from "../ProjectSelection.module.scss";
import {ProjectMainInfoProps, ProjectsContainerProps} from "./Types/ProjectsContainerTypes";
import {Paper, Typography} from "@material-ui/core";
import {MainProjectData} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export let ProjectsSelectionContainer: FC<ProjectsContainerProps> = (props) => {
    if(props.projectsMainData.length === 0) return null;

    const projects = props.projectsMainData.map((projectMainData: MainProjectData) => <ProjectMainInfo
        key={projectMainData.projectId}
        currentProjectIndex={props.currentProjectIndex}
        projectMainData={projectMainData}
        updateProjectMainData={(projectData, currentProjectIndex, projectStatus) => props.updateProjectMainData(projectData, currentProjectIndex, projectStatus)}
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
        const {projectName, projectId, projectStatus} = props.projectMainData;
        props.updateProjectMainData({projectName, projectId}, props.currentProjectIndex, projectStatus as ProjectStatus);
        // TODO: может быть ошибка с неправильно написанным статусом проекта
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