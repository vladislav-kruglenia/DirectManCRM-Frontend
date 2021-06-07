import {
    DeleteTabPayload,
    ProjectTabData
} from "../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";

export type TabLabelProps = {
    isOtherTabs: boolean,
    indexTab: number,
    projectsArrayLength: number,
    currentProjectIndex: number,
    projectInfo: ProjectTabData,
    onDeleteTab: (payload: DeleteTabPayload) => void,
    updateCurrentProjectIndex: (value: number) => void,
}

