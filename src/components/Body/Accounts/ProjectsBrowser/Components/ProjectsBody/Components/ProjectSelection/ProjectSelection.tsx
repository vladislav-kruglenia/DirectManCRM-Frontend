import React, {FC, memo, useCallback} from "react";
import style from "./ProjectSelection.module.scss";
import {
    MainProjectDataKeys,
    ProjectSelectionProps,
    ProjectSelectionQueryData,
    ProjectSelectionQueryVars,
    TypesProjectsEnum
} from "./Types/ProjectSelection.types";
import {
    ClientAccountInfoModel,
    MainProjectData
} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ClientAccountInfo.types";
import {useQuery} from "@apollo/client";
import {GetClientAccountData} from "../../../../../../../../GraphQLServer/Queries/Accounts/GetClientAccountInfo";
import {ProjectsSelectionContainer} from "./ProjectSelectionContainer/ProjectsSelectionContainer";
import {CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getCurrentProjectIndexSelector} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";


export const ProjectSelection: FC<ProjectSelectionProps> = (props) => {
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);

    const getContainersWithProjectsMainData = useCallback((mainProjectData: ClientAccountInfoModel) => {
        /*
            Можем себе позволить as, т.к. тип MainProjectDataKeys был извлечен из типа ClientAccountInfoModel,
            к которому принадлежит объект mainProjectData
        */
        const projectsMainData = Object.entries<Array<MainProjectData>>(mainProjectData) as [MainProjectDataKeys, Array<MainProjectData>][];

        return projectsMainData
            .map((projectsArr: [MainProjectDataKeys, Array<MainProjectData>]) => {
                return <ProjectsSelectionContainer
                    key={projectsArr[0]}
                    currentProjectIndex={currentProjectIndex}
                    title={TypesProjectsEnum[projectsArr[0]]}
                    projectsMainData={projectsArr[1]}
                    updateProjectMainData={(projectMainData, currentProjectIndex, projectStatus) => props.updateProjectMainData(projectMainData, currentProjectIndex, projectStatus)}
                />
            });
    }, [props, currentProjectIndex]);

    const {data, loading} = useQuery<ProjectSelectionQueryData, ProjectSelectionQueryVars>(
        GetClientAccountData, {
            variables: {userId: props.userId}
        });

    if (data) {
        console.log(data);
        const {getClientAccountInfo} = data;
        const {projectsInProgress, completedProjects, frozenProjects, managedProjects} = getClientAccountInfo;
        const containersWithProjectsMainData = getContainersWithProjectsMainData(
            {projectsInProgress, completedProjects, frozenProjects, managedProjects}
        );

        return <div className={style.ProjectSelection}>
            {containersWithProjectsMainData}
        </div>
    }

    if(loading) return <CircularProgress />;

    return <>Error</>; // TODO: обработать ошибку

};

export const ProjectSelectionMemo = memo(ProjectSelection,
    (prevProps: ProjectSelectionProps, nextProps: ProjectSelectionProps)=>{
        return prevProps.userId === nextProps.userId
    });


/*const mainProjectData: ClientAccountInfoModel = {
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
            projectId: "2",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Managed,
            deadline: '01.01.2020',
        }
    ],
    frozenProjects: [
        {
            projectId: "3",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Frozen,
            deadline: '01.01.2020',
        },
        {
            projectId: "4",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Frozen,
            deadline: '01.01.2020',
        },

    ],
    completedProjects: [
        {
            projectId: "5",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Completed,
            deadline: '01.01.2020',
        }
    ],
};*/

