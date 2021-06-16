import React, {FC, memo} from "react";
import {ProjectSelectionMemo} from "./ProjectSelection";
import {ProjectSelectionContainerProps} from "./Types/ProjectSelectionContainer.types";
import {mainProjectData} from "./mainProjectData";


export const ProjectSelectionContainer: FC<ProjectSelectionContainerProps> = (props) => {

    return <ProjectSelectionMemo
        userId={props.userId}
        clientAccountInfo={mainProjectData}
        updateProjectMainData={props.updateProjectMainData}
    />
};

export const ProjectSelectionContainerMemo = memo<ProjectSelectionContainerProps>(ProjectSelectionContainer);




