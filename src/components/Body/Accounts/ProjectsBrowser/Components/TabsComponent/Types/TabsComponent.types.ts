import {ProjectTabData} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type TabsComponentProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    updateCurrentIndex: (index: number) => void,
    addTab: () => void,
}