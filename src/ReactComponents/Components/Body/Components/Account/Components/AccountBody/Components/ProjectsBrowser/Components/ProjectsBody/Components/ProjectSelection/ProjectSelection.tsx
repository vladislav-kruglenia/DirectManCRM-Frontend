import React, {FC, memo, ReactNodeArray, useMemo} from "react";
import {MainProjectDataKeys, ProjectSelectionProps, TypesProjectsEnum} from "./Types/ProjectSelection.types";
import {useSelector} from "react-redux";
import {getCurrentProjectIndexSelector} from "../../../../../../../../../../../../../Redux/Reducers/Account/Account.selectors";
import {MainProjectData} from "../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ClientAccountInfo.types";
import {ProjectsSelectionContainer} from "./ProjectSelectionContainer/ProjectsSelectionContainer";
import style from "./ProjectSelection.module.scss";

export const ProjectSelection: FC<ProjectSelectionProps> = (props) => {
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);

    const projectsMainData = useMemo(() => {
        const {projectsInProgress, completedProjects, frozenProjects, managedProjects} = props.clientAccountInfo;
        const mainProjectData = {projectsInProgress, completedProjects, frozenProjects, managedProjects};

        /*
            Можем себе позволить as, т.к. тип MainProjectDataKeys был извлечен из типа ClientAccountInfoModel,
            к которому принадлежит объект mainProjectData
        */
        return Object.entries<Array<MainProjectData>>(mainProjectData) as [MainProjectDataKeys, Array<MainProjectData>][];

    }, [props.clientAccountInfo]);

    const containersWithProjectsMainData = useMemo((): ReactNodeArray => {

        return projectsMainData
            .map((projectsArr: [MainProjectDataKeys, Array<MainProjectData>]) => {
                return <ProjectsSelectionContainer
                    key={projectsArr[0]}
                    currentProjectIndex={currentProjectIndex}
                    title={TypesProjectsEnum[projectsArr[0]]}
                    projectsMainData={projectsArr[1]}
                    updateProjectMainData={props.updateProjectMainData}
                />
            });
    }, [projectsMainData, currentProjectIndex, props.updateProjectMainData]);

    return <div className={style.ProjectSelection}>
        {containersWithProjectsMainData}
    </div>


};
export const ProjectSelectionMemo = memo<ProjectSelectionProps>(ProjectSelection, (pPr, nPr) => {
    return pPr.userId === nPr.userId
});