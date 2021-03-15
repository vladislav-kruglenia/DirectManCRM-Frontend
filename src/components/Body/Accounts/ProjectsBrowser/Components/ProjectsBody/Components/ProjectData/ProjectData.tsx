import React, {FC} from "react";
import style from "./ProjectData.module.scss"
import {ProjectName} from "./Components/ProjectName/ProjectName";
import {StepperComponent} from "./Components/Stepper/StepperComponent";
import {Deadline} from "./Components/Deadline/Deadline";
import {Debt} from "./Components/Debt/Debt";
import {ProjectNotes} from "./Components/ProjectNotes/ProjectNotes";
import {OrderedServices} from "./Components/OrderedServices/OrderedServices";
import {StagesWorkMessages} from "./Components/StagesWorkMessages/StagesWorkMessages";
import {Brief} from "./Components/Brief/Brief";
import {Comments} from "./Components/Comments/Comments";
import {ProjectDataProps} from "./Types/ProjectData.types";
import {ProjectInfoForClientModel} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";
import {
    DebtPercentageEnum,
    ProjectStageEnum,
    ProjectStatus
} from "../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export let ProjectData: FC<ProjectDataProps> = () => {
    return <div className={style.ProjectData}>
        <ProjectName projectName={projectInfo.projectName}/>

        <StepperComponent projectStages={projectInfo.projectData.projectStages}/>

        <Deadline
            deadline={projectInfo.deadline}
            startDate={projectInfo.projectData.dates.startDate}
            numberDaysForProject={projectInfo.projectData.dates.numberDaysForProject}
        />

        <Debt
            isExists={projectInfo.projectData.dept.isExists}
            amountDebt={projectInfo.projectData.dept.amountDebt}
            debtPercentage={projectInfo.projectData.dept.debtPercentage}
        />

        <OrderedServices
            services={projectInfo.projectData.orderedServices.services}
            tariffName={projectInfo.projectData.orderedServices.tariffName}
        />

        <ProjectNotes projectNotes={projectInfo.projectData.projectNotes}/>

        <Brief briefId={projectInfo.projectData.briefId}/>

        <StagesWorkMessages/>

        <Comments/>
    </div>
};

const projectInfo: ProjectInfoForClientModel = {
    projectId: '1',
    projectStatus: ProjectStatus.InProgress,
    projectName: 'Первый проект',
    deadline: '01.01.2020',
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
        dept: {
            isExists: true,
            amountDebt: 4000,
            debtPercentage: DebtPercentageEnum.TenPercent,
        },
        orderedServices: {
            tariffName: 'Тариф СТАНДАРТ',
            services: [
                {
                    isReady: true,
                    serviceName: 'Услуга1',
                },
                {
                    isReady: true,
                    serviceName: 'Услуга2',
                },
                {
                    isReady: true,
                    serviceName: 'Услуга2',
                },

            ],
        },
        projectNotes: "Заказали контекст стандарт плюс отдельные объявления и кампании для рся/кмс" +
            " (5 товаров, на каждый товар по одной кампании на поиске и по одной на рся/кмс)",

        briefId: 'd8247c35-fa50-473b-83de-d57ab95bfaf7',
        comments: [
            {
                authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
                authorLogin: 'ema1',
                commentDate: '01.01.2020',
                commentText: 'Первый комментарий',
            },
        ],
    },
};