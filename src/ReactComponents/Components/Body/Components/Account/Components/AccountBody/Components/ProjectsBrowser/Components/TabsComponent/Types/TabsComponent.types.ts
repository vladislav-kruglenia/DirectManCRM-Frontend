import {ProjectTabData} from "../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";

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