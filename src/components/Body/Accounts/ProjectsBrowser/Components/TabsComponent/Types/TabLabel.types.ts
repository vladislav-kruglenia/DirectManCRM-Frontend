import {
    DeleteTabPayload,
    ProjectTabData
} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";

export type TabLabelProps = {
    isOtherTabs: boolean,
    indexTab: number,
    projectsArrayLength: number,
    currentProjectIndex: number,
    projectInfo: ProjectTabData,
    onDeleteTab: (payload: DeleteTabPayload) => void,
    updateCurrentProjectIndex: (value: number) => void,
}

