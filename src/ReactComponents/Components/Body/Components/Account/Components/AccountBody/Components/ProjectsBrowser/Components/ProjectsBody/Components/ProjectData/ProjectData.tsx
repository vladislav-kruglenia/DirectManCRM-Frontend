import React, {FC, memo} from "react";
import style from "./ProjectData.module.scss"
import {ProjectName} from "./Components/ProjectName/ProjectName";
import {StepperComponent} from "./Components/Stepper/StepperComponent";
import {Deadline} from "./Components/Deadline/Deadline";
import {ProjectNotes} from "./Components/ProjectNotes/ProjectNotes";
import {OrderedServices} from "./Components/OrderedServices/OrderedServices";
import {Brief} from "./Components/Brief/Brief";
import {Comments} from "./Components/Comments/Comments";
import {ProjectDataProps} from "./Types/ProjectData.types";
import {
    ProjectStageEnum,
    ProjectStatus
} from "../../../../../../../../../../../../../Redux/Reducers/Account/Types/ClientAccount.enums";
import {ProjectInfoForClientModel} from "../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";


export const ProjectData: FC<ProjectDataProps> = () => {

    const {projectName, deadline, projectData } = projectInfo1;
    const {dates, orderedServices, comments} = projectData;

    return <div className={style.ProjectData}>
        <ProjectName
            projectName={projectName}
            isAccessToEdit={true}
        />

        <StepperComponent projectStages={projectData.projectStages}/>

        <Deadline
            deadline={deadline}
            startDate={dates.startDate}
            numberDaysForProject={dates.numberDaysForProject}
        />

        <OrderedServices
            services={orderedServices.services}
            tariffName={orderedServices.tariffName}
        />

        <ProjectNotes projectNotes={projectData.projectNotes}/>

        <Comments comments={comments}/>

        <Brief briefId={projectData.briefId}/>

    </div>
};

export const ProjectDataMemo = memo(
    ProjectData,
    (prevProps: ProjectDataProps, nextProps: ProjectDataProps) => {
        return prevProps.projectIdUrl === nextProps.projectIdUrl || nextProps.projectIdUrl === ""
    }
);

const projectInfo1: ProjectInfoForClientModel = {
    projectId: '1',
    projectStatus: ProjectStatus.InProgress,
    projectName: 'Первый проект',
    deadline: '01/01/2020',
    projectData: {
        projectStages: [
            {
                isActive: false,
                stageType: ProjectStageEnum.KeysCollection,
            },
            {
                isActive: true,
                stageType: ProjectStageEnum.AdSetup,
            },
            {
                isActive: false,
                stageType: ProjectStageEnum.ManagedProject,
            },
            {
                isActive: false,
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
                authorLogin: 'Antony1',
                commentDate: '15:34 01.01.2020',
                commentText: 'Второй комментарий',
                commentId: "656463464576535"
            },
            {
                authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
                authorLogin: 'Antony1',
                commentDate: '15:34 01.01.2020',
                commentText: 'Первый комментарий',
                commentId: "151543434345454523231"
            },

        ],
    },
};
