import React, {FC} from "react";
import ProjectsSelectionStyle from "../../../ProjectSelection.module.scss";
import {ProjectStatus} from "../../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";
import {ProjectMainInfoProps} from "./ProjectMainInfo.types";

export const ProjectMainInfo: FC<ProjectMainInfoProps> = (props) => {
    return <div className={ProjectsSelectionStyle.ProjectMainInfo} onClick={() => {
        const {projectName, projectId, projectStatus} = props.projectMainData;
        props.updateProjectMainData({
            projectName,
            projectId
        }, props.currentProjectIndex, projectStatus as ProjectStatus);
        // TODO: может быть ошибка с неправильно написанным статусом проекта
    }}>
        <div className={ProjectsSelectionStyle.ProjectName}>{props.projectMainData.projectName}</div>
        <div className={ProjectsSelectionStyle.ProjectDeadline}>{props.projectMainData.deadline}</div>
    </div>;
};