import {ProjectTabData} from "../../../Types/Account.types";
import {v4 as uuidv4} from "uuid";

export class ViewedProjectsService {
    viewedProjects: ProjectTabData[];

    constructor(projects: ProjectTabData[] | null = null) {
        this.viewedProjects = projects || this._getViewedProjectsStartValue();
    }

    getIndexProject(projectId: string)  {
        return this.viewedProjects
            .findIndex((project: ProjectTabData) => project.projectId === projectId);
    };

    private _getViewedProjectsStartValue(): ProjectTabData[] {
        return [
            {
                isProjectSelected: false,
                projectName: "",
                projectId: "",
                projectStatus: "",
                idProjectTab: uuidv4(),
                textMainForm: "",
                response: {
                    isResponse: false,
                    commentDestination: '',
                }
            },
        ]
    }
}