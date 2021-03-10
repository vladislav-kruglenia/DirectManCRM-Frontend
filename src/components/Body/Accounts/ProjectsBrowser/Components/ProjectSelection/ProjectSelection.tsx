import React, {FC} from "react";
import style from "./ProjectSelection.module.scss";
import {ProjectsSelectionContainer} from "./ProjectSelectionContainer/ProjectsSelectionContainer";
import {ProjectMainData} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";
import {ProjectSelectionProps} from "./Types/ProjectSelection.types";

export let ProjectSelection: FC<ProjectSelectionProps> = ({currentProjectIndex, ...props}) => {

    return <div className={style.ProjectSelection}>
        <ProjectsSelectionContainer
            title={'Проекты в работе'}
            projectsMainData={projectsMainDataModel}
            updateProjectMainData={projectMainData => props.updateProjectMainData(projectMainData)}
        />
        <ProjectsSelectionContainer
            title={'Замороженные проекты'}
            projectsMainData={projectsMainDataModel}
            updateProjectMainData={projectData => props.updateProjectMainData(projectData)}
        />
        <ProjectsSelectionContainer
            title={'Завершенные проекты'}
            projectsMainData={projectsMainDataModel}
            updateProjectMainData={projectData => props.updateProjectMainData(projectData)}
        />
        <ProjectsSelectionContainer
            title={'Проекты на ведении'}
            projectsMainData={projectsMainDataModel}
            updateProjectMainData={projectData => props.updateProjectMainData(projectData)}
        />
    </div>
};


const projectsMainDataModel: ProjectMainData[] = [
    {
        projectName: 'Настройка контекста',
        projectId: "1dewswzzwzwzwzwzw",
    },
    {
        projectName: 'Настройка контекста 2',
        projectId: "2dedededed",
    },
];
