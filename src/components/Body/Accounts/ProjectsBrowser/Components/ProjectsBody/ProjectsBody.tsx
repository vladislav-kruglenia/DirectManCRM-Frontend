import React, {FC, memo, useEffect, useState} from "react";
import {ProjectDataMemo} from "./Components/ProjectData/ProjectData";
import {ProjectSelectionContainerMemo} from "./Components/ProjectSelection/ProjectSelectionContainer";
import {ProjectsBodyProps} from "./Types/ProjectsBody.types";

export const ProjectsBody: FC<ProjectsBodyProps> = (props) => {
    let [isProjectSelected, updateProjectSelectedStatus] = useState(!!props.projectIdUrl);

    useEffect(() => {
        updateProjectSelectedStatus(!!props.projectIdUrl);
    }, [props.currentProjectIndex, /*projectsViewed,*/ props.projectIdUrl]);

    if (isProjectSelected) {
        return <ProjectDataMemo projectIdUrl={props.projectIdUrl || ""}/>
    } else {
        return <ProjectSelectionContainerMemo
            userId={"fea230b4-3b45-41cc-b98d-eb5dfa88e434"} //TODO: заменить индекс при настройке бизнес-логики
            updateProjectMainData={props.updateProjectMainData}
        />
    }
};

export const ProjectsBodyMemo = memo(ProjectsBody);





