import {StartStateType} from "../Types/Account.types";
import {LinksService} from "./Services/LinksService/Links.service";
import {ViewedProjectsService} from "./Services/ViewedProjects/ViewedProjects.service";

export class AccountReducerStartState {
    startState: StartStateType;

    constructor() {
        this.startState = this.getStartState();
    }

    private getStartState(): StartStateType {
        const Links = new LinksService();
        const ViewedProjects = new ViewedProjectsService();

        return {
            currentProjectIndex: 0,
            viewedProjects: ViewedProjects.viewedProjects,
            links: Links.links,
            indexMainLink: Links.indexMainLink,
        }
    }
}

