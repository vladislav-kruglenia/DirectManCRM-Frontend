import React, {FC, memo} from "react";
import {
    ProjectSelectionQueryData,
    ProjectSelectionQueryVars
} from "./Types/ProjectSelection.types";
import {useQuery} from "@apollo/client";
import {GetClientAccountData} from "../../../../../../../../GraphQLServer/Queries/Accounts/GetClientAccountInfo";
import {CircularProgress} from "@material-ui/core";
import {ProjectSelectionMemo} from "./ProjectSelection";
import {ProjectSelectionContainerProps} from "./Types/ProjectSelectionContainer.types";


export const ProjectSelectionContainer: FC<ProjectSelectionContainerProps> = (props) => {
    const {data, loading} = useQuery<ProjectSelectionQueryData, ProjectSelectionQueryVars>(
        GetClientAccountData, {
            variables: {userId: props.userId}
        });

    if (data) {
        console.log(data);
        const {getClientAccountInfo} = data;
        return <ProjectSelectionMemo
            userId={props.userId}
            clientAccountInfo={getClientAccountInfo}
            updateProjectMainData={props.updateProjectMainData}
        />
    }

    if (loading) return <CircularProgress/>;

    return <>Error</>; // TODO: обработать ошибку

};

export const ProjectSelectionContainerMemo = memo<ProjectSelectionContainerProps>(ProjectSelectionContainer);




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

