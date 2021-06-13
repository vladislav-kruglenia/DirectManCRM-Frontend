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
import {projectInfo1} from "./ProjectData.data";


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


