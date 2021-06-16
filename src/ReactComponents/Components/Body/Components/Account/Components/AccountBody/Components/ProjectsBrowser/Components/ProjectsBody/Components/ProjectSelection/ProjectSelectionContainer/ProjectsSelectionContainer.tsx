import React, {FC} from "react";
import ProjectsSelectionStyle from "../ProjectSelection.module.scss";
import {ProjectsContainerProps} from "./ProjectsContainer.types";
import {Paper} from "@material-ui/core";
import {MainProjectData} from "../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ClientAccountInfo.types";
import {ProjectMainInfo} from "./Components/ProjectMainInfo/ProjectMainInfo";
import {ProjectMainInfoTitles} from "./Components/ProjectMainInfoTitles/ProjectMainInfoTitles";
import {ProjectsSelectionContainerTitle} from "./Components/ProjectsSelectionContainerTitle/ProjectsSelectionContainerTitle";

export const ProjectsSelectionContainer: FC<ProjectsContainerProps> = (props) => {
    const {projectType, title} = props;
    if (props.projectsMainData.length === 0) return null;

    const projects = props.projectsMainData.map((projectMainData: MainProjectData) => <ProjectMainInfo
        key={projectMainData.projectId}
        currentProjectIndex={props.currentProjectIndex}
        projectMainData={projectMainData}
        updateProjectMainData={(projectData, currentProjectIndex, projectStatus) => props.updateProjectMainData(projectData, currentProjectIndex, projectStatus)}
    />);

    return <Paper className={ProjectsSelectionStyle.ProjectsContainer}>
        <ProjectsSelectionContainerTitle title={title} projectType={projectType}/>
        <ProjectMainInfoTitles/>
        {projects}
    </Paper>
};

