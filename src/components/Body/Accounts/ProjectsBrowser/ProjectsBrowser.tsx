import React, {FC, useCallback, useEffect, useState} from "react";
import style from "./ProjectsBrowser.module.scss"
import {TabsComponent} from "./Components/TabsComponent/TabsComponent";
import {Divider, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    ProjectMainData,
    UpdateProjectMainDataPayload
} from "../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ProjectsBrowserProps} from "./Types/ProjectsBrowser.types";
import {
    addTab,
    updateProjectMainData
} from "../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer"
import {StringParam, useQueryParam} from "use-query-params";
import {ProjectsBody} from "./Components/ProjectsBody/ProjectsBody";
import {ProjectStatus} from "../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";


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


    const addTabAction = () => dispatch(addTab({}));

    useEffect(() => {
        debugger
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
        <TabsComponent
            projectsViewed={projectsViewed}
            currentProjectIndex={currentProjectIndex}
            updateCurrentIndex={index => props.updateCurrentProjectIndex(index)}
            addTab={() => addTabAction()}
        />
        <Divider/>
        <div className={style.projectsBody}>
            <ProjectsBody
                projectsViewed={projectsViewed}
                currentProjectIndex={currentProjectIndex}
                projectIdUrl={projectIdUrl}
                addTab={() => addTabAction()}
                updateProjectMainData={(projectMainData, currentProjectIndex, projectStatus) => updateProjectMainDataAction(projectMainData, currentProjectIndex, projectStatus)}
            />
        </div>
    </Paper>
};


