import React, {FC, memo} from "react";
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
import {ProjectDataProps, QueryData, QueryVars} from "./Types/ProjectData.types";
import {useQuery} from "@apollo/client";
import {GetProjectData} from "../../../../../../../../GraphQLServer/Queries/Accounts/GetProjectInfoForClient";
import {CircularProgress} from "@material-ui/core";


export let ProjectData: FC<ProjectDataProps> = () => {
    const {data, loading} = useQuery<QueryData, QueryVars>(GetProjectData,{
        variables: {projectId: '1'/*props.projectIdUrl*/}//TODO: заменить индекс при настройке бизнес-логики
    });

    if(loading) return <CircularProgress />;

    if(data) {
        console.log(data);
        const {getProjectInfoForClient} = data;
        const {projectData} = getProjectInfoForClient;
        const {dates, dept, orderedServices} = projectData;
        return <div className={style.ProjectData}>
            <ProjectName projectName={getProjectInfoForClient.projectName}/>

            <StepperComponent projectStages={projectData.projectStages}/>

            <Deadline
                deadline={getProjectInfoForClient.deadline}
                startDate={dates.startDate}
                numberDaysForProject={dates.numberDaysForProject}
            />

            <Debt
                isExists={dept.isExists}
                amountDebt={dept.amountDebt}
                debtPercentage={dept.debtPercentage}
            />

            <OrderedServices
                services={orderedServices.services}
                tariffName={orderedServices.tariffName}
            />

            <ProjectNotes projectNotes={projectData.projectNotes}/>

            <Brief briefId={projectData.briefId}/>

            <StagesWorkMessages/>

            <Comments/>
        </div>
    }

    return <>Error</>; // TODO: обработать ошибку

};

export const ProjectDataContainer = memo(
    ProjectData,
    (prevProps:ProjectDataProps, nextProps:ProjectDataProps) => {
        return prevProps.projectIdUrl === nextProps.projectIdUrl || nextProps.projectIdUrl === ""
    }
);

/*
const projectInfo1: ProjectInfoForClientModel = {
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
                authorLogin: 'ema1',
                commentDate: '01.01.2020',
                commentText: 'Первый комментарий',
            },
        ],
    },
};*/
