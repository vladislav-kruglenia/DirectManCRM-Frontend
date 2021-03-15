import {ProjectTabData} from "../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";

export type ProjectsBrowserProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    updateCurrentProjectIndex: (index: number) => void,
}

