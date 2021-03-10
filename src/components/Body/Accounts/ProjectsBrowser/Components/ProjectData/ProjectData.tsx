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


export let ProjectData: FC<ProjectDataProps> = () => {
    return <div className={style.ProjectData}>
        <ProjectName/>
        <StepperComponent/>
        <Deadline/>
        <Debt/>
        <OrderedServices/>
        <ProjectNotes/>
        <Brief/>
        <StagesWorkMessages/>
        <Comments/>
    </div>
};