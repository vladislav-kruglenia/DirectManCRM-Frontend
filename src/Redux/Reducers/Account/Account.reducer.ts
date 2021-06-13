import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {
    ProjectTabData,
    StartStateType
} from "./Types/Account.types";
import {v4 as uuidv4} from 'uuid';
import {AccountReducerStartState} from "./StartState/StartState";
import {
    DeleteTabPayload,
    AddResponseCommentPayload,
    UpdateProjectMainDataPayload,
    EditTextResponseCommentPayload, RemoveResponseCommentPayload
} from "./Types/Actions.types";
import {ViewedProjectsService} from "./StartState/Services/ViewedProjects/ViewedProjects.service";


const initialState = new AccountReducerStartState().startState;

const accountReducer = createSlice<StartStateType, SliceCaseReducers<StartStateType>>({
    name: "Account",
    initialState,
    reducers: {
        addTab(state) {
            const newProjectTab: ProjectTabData = {
                idProjectTab: uuidv4(),
                projectName: "",
                projectId: "",
                isProjectSelected: false,
                projectStatus: "",
                textMainForm: "",
                response: {
                    isResponse: false,
                    commentDestination: '',
                }
            };
            state.viewedProjects = [...state.viewedProjects, newProjectTab]
        },

        updateProjectMainData(state, action: PayloadAction<UpdateProjectMainDataPayload>) {
            const {projectStatus, projectMainData, currentProjectIndex} = action.payload;
            const currentProject = state.viewedProjects[currentProjectIndex];

            const newProjectData: ProjectTabData = {
                ...projectMainData,
                isProjectSelected: true,
                idProjectTab: currentProject.idProjectTab,
                projectStatus: projectStatus,
                response: currentProject.response,
                textMainForm: currentProject.textMainForm,
            };

            state.viewedProjects[currentProjectIndex] = newProjectData
        },

        /*updateProjectStatus(state, action: PayloadAction<UpdateProjectStatusPayload>){
            const {currentProjectIndex, projectStatus} = action.payload;
            state.viewedProjects[currentProjectIndex].projectStatus = projectStatus;
        },*/


        deleteTab(state, action: PayloadAction<DeleteTabPayload>) {
            const indexProject = new ViewedProjectsService(state.viewedProjects).getIndexProject( action.payload.projectId);
            state.viewedProjects.splice(indexProject, 1)
        },

        updateCurrentProjectIndex(state, action: PayloadAction<number>) {
            state.currentProjectIndex = action.payload
        },

        updateIndexMainLink(state, action: PayloadAction<number>) {
            state.indexMainLink = action.payload
        },

        addResponseComment(state, action: PayloadAction<AddResponseCommentPayload>){
            const {commentDestination} = action.payload;
            const {currentProjectIndex} = state;
            state.viewedProjects[currentProjectIndex].response = {
                commentDestination,
                isResponse: true,
            }
        },

        editTextResponseComment(state, action: PayloadAction<EditTextResponseCommentPayload>){
            const {currentProjectIndex} = state;

            state.viewedProjects[currentProjectIndex].textMainForm = action.payload.text;
        },

        removeResponseComment(state, action: PayloadAction<RemoveResponseCommentPayload>){
            const {currentProjectIndex} = state;

            state.viewedProjects[currentProjectIndex].response = {
                isResponse: false,
                commentDestination: '',
            }
        },

    }
});


export const {
    addTab,
    deleteTab,
    updateProjectMainData,
    updateCurrentProjectIndex,
    updateIndexMainLink,
    addResponseComment,
    editTextResponseComment,
    removeResponseComment,
    // updateProjectStatus,
} = accountReducer.actions;




export default accountReducer.reducer