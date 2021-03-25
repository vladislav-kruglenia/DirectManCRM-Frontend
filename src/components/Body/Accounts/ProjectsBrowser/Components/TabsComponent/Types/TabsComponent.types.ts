import {ProjectTabData} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";

export type TabsComponentProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    updateCurrentIndex: (index: number) => void,
    addTab: () => void,
}

export type AddTabButtonProps = {
    projectsViewed: ProjectTabData[],
    updateCurrentIndex: (index: number) => void,
    addTab: () => void,
}