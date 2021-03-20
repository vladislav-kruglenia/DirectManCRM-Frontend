import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {
    DeleteTabPayload,
    ProjectTabData,
    StartStateType,
    UpdateProjectMainDataPayload
} from "./Types/ClientAccountReducer.types";
import {v4 as uuidv4} from 'uuid';
import {StartStateClientAccount} from "./StartState";


const startStateClass = new StartStateClientAccount();

let clientAccountReducer = createSlice<StartStateType, SliceCaseReducers<StartStateType>>({
    name: "ClientAccountReducer",
    initialState: startStateClass.getStartState(),
    reducers: {
        addTab(state) {
            const newProjectTab: ProjectTabData = {
                idProjectTab: uuidv4(),
                projectName: "",
                projectId: "",
                isProjectSelected: false,
                projectStatus: "",
            };
            state.viewedProjects = [...state.viewedProjects, newProjectTab]
        },

        updateProjectMainData(state, action: PayloadAction<UpdateProjectMainDataPayload>) {
            const {projectStatus, projectMainData, currentProjectIndex} = action.payload;
            const newProjectData: ProjectTabData = {
                ...projectMainData,
                isProjectSelected: true,
                idProjectTab: state.viewedProjects[currentProjectIndex].idProjectTab,
                projectStatus: projectStatus,
            };

            state.viewedProjects[action.payload.currentProjectIndex] = newProjectData
        },

        /*updateProjectStatus(state, action: PayloadAction<UpdateProjectStatusPayload>){
            const {currentProjectIndex, projectStatus} = action.payload;
            state.viewedProjects[currentProjectIndex].projectStatus = projectStatus;
        },*/


        deleteTab(state, action: PayloadAction<DeleteTabPayload>) {
            const indexProject = getIndexProject(state.viewedProjects, action.payload.projectId);
            state.viewedProjects.splice(indexProject, 1)
        },
        updateCurrentProjectIndex(state, action: PayloadAction<number>) {
            state.currentProjectIndex = action.payload
        },
        updateIndexMainLink(state, action: PayloadAction<number>) {
            state.indexMainLink = action.payload
        },

    }
});

const getIndexProject = (viewedProjects: ProjectTabData[], projectId: string) => {
    return viewedProjects
        .findIndex((project: ProjectTabData) => project.projectId === projectId);
};


export const {
    addTab,
    deleteTab,
    updateProjectMainData,
    updateCurrentProjectIndex,
    updateIndexMainLink,
    // updateProjectStatus,
} = clientAccountReducer.actions;


export default clientAccountReducer.reducer