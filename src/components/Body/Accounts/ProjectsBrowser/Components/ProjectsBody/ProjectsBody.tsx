import React, {FC, useEffect, useState} from "react";
import {ProjectData} from "./Components/ProjectData/ProjectData";
import {ProjectSelection} from "./Components/ProjectSelection/ProjectSelection";
import {ProjectsBodyProps} from "./Types/ProjectsBody.types";

export let ProjectsBody: FC<ProjectsBodyProps> = ({projectsViewed, ...props}) => {
    let [isProjectSelected, updateProjectSelectedStatus] = useState(!!props.projectIdUrl);

    useEffect(() => {
        updateProjectSelectedStatus(!!props.projectIdUrl);
    }, [props.currentProjectIndex, projectsViewed, props.projectIdUrl]);

    if (isProjectSelected) {
        return <ProjectData projectIdUrl={props.projectIdUrl || ""}/>
    } else {
        return <ProjectSelection
            currentProjectIndex={props.currentProjectIndex}
            updateProjectMainData={projectMainData => props.updateProjectMainData(projectMainData)}
        />
    }
};




