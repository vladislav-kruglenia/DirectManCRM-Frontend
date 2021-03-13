import React, {FC, useCallback, useEffect, useState} from "react";
import style from "./ProjectsBrowser.module.scss"
import {TabsComponent} from "./Components/TabsComponent/TabsComponent";
import {Divider, Paper} from "@material-ui/core";
import {ProjectSelection} from "./Components/ProjectSelection/ProjectSelection";
import {useDispatch} from "react-redux";
import {
    ProjectMainData,
    UpdateProjectMainDataPayload
} from "../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";
import {ProjectsBodyProps, ProjectsBrowserProps} from "./Types/ProjectsBrowser.types";
import {ProjectData} from "./Components/ProjectData/ProjectData";
import {
    addTab,
    updateProjectMainData
} from "../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer"
import {StringParam, useQueryParam} from "use-query-params";


export let ProjectsBrowser:FC<ProjectsBrowserProps> = ({projectsViewed, currentProjectIndex, ...props}) => {

    const [projectIdUrl, setProjectIdUrl] = useQueryParam('id', StringParam);
    const [projectNameUrl, setProjectNameUrl] = useQueryParam('projectName', StringParam);
    const [startUrlParams, editStartUrlParams] = useState({projectId: projectIdUrl, projectName: projectNameUrl});

    const dispatch = useDispatch();
    const updateProjectMainDataAction = useCallback((projectMainData: ProjectMainData) => {
        const action: UpdateProjectMainDataPayload = {currentProjectIndex, projectMainData};
        dispatch(updateProjectMainData(action))
    }, [currentProjectIndex, dispatch]);


    const addTabAction = () => dispatch(addTab({}));

    useEffect(() => {
        if(!startUrlParams.projectId && !startUrlParams.projectName){
            setProjectIdUrl(projectsViewed[currentProjectIndex].projectId);
            setProjectNameUrl(projectsViewed[currentProjectIndex].projectName)
        } else {
            updateProjectMainDataAction({
                projectId: startUrlParams.projectId || "",
                projectName: startUrlParams.projectName || ""
            });
            editStartUrlParams({projectId: '', projectName: ''})
        }

    },[projectsViewed, currentProjectIndex, setProjectIdUrl,
        setProjectNameUrl, editStartUrlParams, startUrlParams,
        updateProjectMainDataAction
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
                updateProjectMainData={projectMainData => updateProjectMainDataAction(projectMainData)}
            />
        </div>
    </Paper>
};


export let ProjectsBody:FC<ProjectsBodyProps> = ({projectsViewed, ...props}) => {
    let [isProjectSelected, updateProjectSelectedStatus] = useState(!!props.projectIdUrl);

    useEffect(() => {
        updateProjectSelectedStatus(!!props.projectIdUrl);
    },[props.currentProjectIndex, projectsViewed, props.projectIdUrl]);

    if(isProjectSelected){
        return <ProjectData projectIdUrl={props.projectIdUrl || ""}/>
    } else {
        return <ProjectSelection
            currentProjectIndex={props.currentProjectIndex}
            updateProjectMainData={projectMainData => props.updateProjectMainData(projectMainData)}
        />
    }
};
