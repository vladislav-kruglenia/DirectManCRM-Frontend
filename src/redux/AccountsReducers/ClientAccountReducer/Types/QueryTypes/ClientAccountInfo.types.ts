export type ClientAccountInfoModel = {
    // userId: string;
    projectsInProgress: Array<MainProjectData>;
    managedProjects: Array<MainProjectData>;
    frozenProjects: Array<MainProjectData>;
    completedProjects: Array<MainProjectData>;
}

export type MainProjectData = {
    projectId: string;
    projectName: string;
    projectStatus: string;
    deadline: string;
}
