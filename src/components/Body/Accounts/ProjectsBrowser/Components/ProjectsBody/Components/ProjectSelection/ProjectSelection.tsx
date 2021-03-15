import React, {FC} from "react";
import style from "./ProjectSelection.module.scss";
import {ProjectsSelectionContainer} from "./ProjectSelectionContainer/ProjectsSelectionContainer";
import {MainProjectDataKeys, ProjectSelectionProps, TypesProjectsEnum} from "./Types/ProjectSelection.types";
import {
    ClientAccountInfoModel,
    MainProjectData
} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";


export let ProjectSelection: FC<ProjectSelectionProps> = ({currentProjectIndex, ...props}) => {

    /*
        Можем себе позволить as, т.к. тип MainProjectDataKeys был извлечен из типа ClientAccountInfoModel,
        к которому принадлежит объект mainProjectData
    */
    const projectsMainData = Object.entries<Array<MainProjectData>>(mainProjectData) as [MainProjectDataKeys, Array<MainProjectData>][];

    const containersWithProjectsMainData = projectsMainData
        .map((projectsArr: [MainProjectDataKeys, Array<MainProjectData>]) => {
            return <ProjectsSelectionContainer
                title={TypesProjectsEnum[projectsArr[0]]}
                projectsMainData={projectsArr[1]}
                updateProjectMainData={projectMainData => props.updateProjectMainData(projectMainData)}
            />
        });

    return <div className={style.ProjectSelection}>
        {containersWithProjectsMainData}
    </div>
};


const mainProjectData: ClientAccountInfoModel = {
    projectsInProgress: [
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.InProgress,
            deadline: '01.01.2020',
        },


    ],
    managedProjects: [
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Managed,
            deadline: '01.01.2020',
        }
    ],
    frozenProjects: [
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Frozen,
            deadline: '01.01.2020',
        },
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Frozen,
            deadline: '01.01.2020',
        },

    ],
    completedProjects: [
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Completed,
            deadline: '01.01.2020',
        }
    ],
};

