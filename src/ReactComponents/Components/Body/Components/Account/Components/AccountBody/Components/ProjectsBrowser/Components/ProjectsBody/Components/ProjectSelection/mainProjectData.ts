import {ClientAccountInfoModel} from "../../../../../../../../../../../../../GraphQLServer/QueryTypes/ClientAccountInfo.types";
import {ProjectStatus} from "../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";

export const mainProjectData: ClientAccountInfoModel = {
    projectsInProgress: [
        {
            projectId: "1",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.InProgress,
            deadline: '01.01.2020',
        },


    ],
    managedProjects: [
        /*{
            projectId: "2",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Managed,
            deadline: '01.01.2020',
        }*/
    ],
    frozenProjects: [
        /*{
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
        },*/

    ],
    completedProjects: [
        {
            projectId: "5",
            projectName: 'Первый проект',
            projectStatus: ProjectStatus.Completed,
            deadline: '01.01.2020',
        }
    ],
};