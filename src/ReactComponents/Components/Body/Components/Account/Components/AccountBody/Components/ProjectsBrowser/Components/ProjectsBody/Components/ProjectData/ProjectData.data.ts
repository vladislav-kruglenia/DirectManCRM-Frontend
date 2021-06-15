import {ProjectInfoForClientModel} from "../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";
import {
    ProjectStageEnum,
    ProjectStatus
} from "../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";

export const projectInfo1: ProjectInfoForClientModel = {
    projectId: '1',
    projectStatus: ProjectStatus.InProgress,
    projectName: 'Первый проект',
    deadline: '01/01/2020',
    projectData: {
        indexActiveStage: 0,
        projectStages: [
            {
                stageType: ProjectStageEnum.KeysCollection,
            },
            {
                stageType: ProjectStageEnum.AdSetup,
            },
            {
                stageType: ProjectStageEnum.ManagedProject,
            },
            {
                stageType: ProjectStageEnum.SetupReady,
            },

        ],
        dates: {
            numberDaysForProject: 11,
            startDate: "01/10/2020"
        },
        orderedServices: {
            tariffName: 'Тариф СТАНДАРТ',
            services: [
                {
                    isReady: true,
                    serviceName: 'Услуга1',
                },
                {
                    isReady: false,
                    serviceName: 'Услуга2',
                },
                {
                    isReady: false,
                    serviceName: 'Услуга3',
                },

            ],
        },
        projectNotes: "Заказали контекст стандарт плюс отдельные объявления и кампании для рся/кмс" +
            " (5 товаров, на каждый товар по одной кампании на поиске и по одной на рся/кмс)",

        briefId: 'd8247c35-fa50-473b-83de-d57ab95bfaf7',
        comments: [
            {
                authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
                authorLogin: 'Antony1',
                commentDate: '15:34 01.01.2020',
                commentText: 'Третий комментарий',
                commentId: "15151514171"
            },
            {
                authorId: '1',
                authorLogin: 'Antony2',
                commentDate: '15:34 01.01.2020',
                commentText: 'Второй комментарий',
                commentId: "656463464576535"
            },
            {
                authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
                authorLogin: 'Antony3',
                commentDate: '15:34 01.01.2020',
                commentText: 'Первый комментарий',
                commentId: "151543434345454523231"
            },

        ],
    },
};