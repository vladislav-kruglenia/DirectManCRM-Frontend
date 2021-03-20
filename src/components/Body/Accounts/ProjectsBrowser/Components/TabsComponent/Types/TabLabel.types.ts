import {ProjectStatus} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccount.enums";

export type TabLabelProps = {
    isOtherTabs: boolean,
    indexTab: number,
    projectsArrayLength: number,
    currentProjectIndex: number,
    projectName: string | null,
    projectStatus: ProjectStatus | "",
    onDeleteTab: () => void,
    updateCurrentProjectIndex: (value: number) => void,
}

