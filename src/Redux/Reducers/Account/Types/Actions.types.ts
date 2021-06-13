import {ProjectStatus} from "./Account.enums";
import {ProjectMainData} from "./Account.types";

export type DeleteTabPayload = {
    projectId: string,
}
export type UpdateProjectMainDataPayload = {
    projectMainData: ProjectMainData,
    currentProjectIndex: number,
    projectStatus: ProjectStatus | "",
}
export type UpdateProjectStatusPayload = {
    projectStatus: ProjectStatus | "",
    currentProjectIndex: number,
}

export type AddResponseCommentPayload = {
    commentDestination: string,
    // textMainForm: string,
}

export type EditTextResponseCommentPayload = {
    text: string,
}

export type RemoveResponseCommentPayload = {
}

