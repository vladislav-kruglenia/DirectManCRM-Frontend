import React, {FC, useEffect, useState} from "react";
import {ProjectDataMemo} from "./Components/ProjectData/ProjectData";
import {ProjectSelectionMemo} from "./Components/ProjectSelection/ProjectSelection";
import {ProjectsBodyProps} from "./Types/ProjectsBody.types";

export let ProjectsBody: FC<ProjectsBodyProps> = ({projectsViewed, ...props}) => {
    let [isProjectSelected, updateProjectSelectedStatus] = useState(!!props.projectIdUrl);

    useEffect(() => {
        updateProjectSelectedStatus(!!props.projectIdUrl);
    }, [props.currentProjectIndex, projectsViewed, props.projectIdUrl]);

    if (isProjectSelected) {
        return <ProjectDataMemo projectIdUrl={props.projectIdUrl || ""}/>
    } else {
        return <ProjectSelectionMemo
            userId={"fea230b4-3b45-41cc-b98d-eb5dfa88e434"} //TODO: заменить индекс при настройке бизнес-логики
            updateProjectMainData={(projectMainData, currentProjectIndex, projectStatus) => props.updateProjectMainData(projectMainData, currentProjectIndex, projectStatus)}
        />
    }
};




