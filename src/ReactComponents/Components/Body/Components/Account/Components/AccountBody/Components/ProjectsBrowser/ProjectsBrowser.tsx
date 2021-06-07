import React, {FC, memo, useCallback, useEffect, useState} from "react";
import style from "./ProjectsBrowser.module.scss"
import {TabsComponentMemo} from "./Components/TabsComponent/TabsContainer";
import {Divider, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    ProjectMainData,
    UpdateProjectMainDataPayload
} from "../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {ProjectsBrowserProps} from "./Types/ProjectsBrowser.types";
import {
    addTab,
    updateProjectMainData
} from "../../../../../../../../../Redux/Reducers/Account/Account.reducer"
import {StringParam, useQueryParam} from "use-query-params";
import {ProjectsBodyMemo} from "./Components/ProjectsBody/ProjectsBody";
import {ProjectStatus} from "../../../../../../../../../Redux/Reducers/Account/Types/ClientAccount.enums";


export let ProjectsBrowser: FC<ProjectsBrowserProps> = ({projectsViewed, currentProjectIndex, ...props}) => {

    const [projectIdUrl, setProjectIdUrl] = useQueryParam('id', StringParam);
    const [projectNameUrl, setProjectNameUrl] = useQueryParam('projectName', StringParam);
    const [projectStatusUrl, setProjectStatusUrl] = useQueryParam('projectStatus', StringParam);
    const [startUrlParams, editStartUrlParams] = useState({
        projectId: projectIdUrl,
        projectName: projectNameUrl,
        projectStatus: projectStatusUrl
    });

    const dispatch = useDispatch();
    const updateProjectMainDataAction = useCallback(
        (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => {
            const action: UpdateProjectMainDataPayload = {currentProjectIndex, projectMainData, projectStatus};
            dispatch(updateProjectMainData(action))
        }, [dispatch]);


    const addTabAction = useCallback(() => {
        return dispatch(addTab({}))
    }, [dispatch]);

    useEffect(() => {
        if (!startUrlParams.projectId && !startUrlParams.projectName) {
            // При обновлении projectsViewed нужно обновить данные url
            const {projectId, projectName, projectStatus} = projectsViewed[currentProjectIndex];
            setProjectIdUrl(projectId);
            setProjectNameUrl(projectName);
            setProjectStatusUrl(projectStatus);

        } else {
            updateProjectMainDataAction({
                projectId: startUrlParams.projectId || "",
                projectName: startUrlParams.projectName || ""
            }, currentProjectIndex, startUrlParams.projectStatus as ProjectStatus || "" );
            editStartUrlParams({projectId: '', projectName: '', projectStatus: ''})
        }

    }, [projectsViewed, currentProjectIndex, setProjectIdUrl,
        setProjectNameUrl, editStartUrlParams, startUrlParams,
        updateProjectMainDataAction, setProjectStatusUrl
    ]);


    return <Paper className={style.ProjectsBrowser}>
        <TabsComponentMemo
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            updateCurrentIndex={props.updateCurrentProjectIndex}
            addTab={addTabAction}
        />
        <Divider component={'div'}/>
        <div className={style.projectsBody}>
            <ProjectsBodyMemo
                currentProjectIndex={currentProjectIndex}
                projectIdUrl={projectIdUrl}
                addTab={addTabAction}
                updateProjectMainData={updateProjectMainDataAction}
            />
        </div>
    </Paper>
};


export const ProjectsBrowserMemo = memo(ProjectsBrowser);



