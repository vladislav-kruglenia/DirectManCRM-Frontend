import {ProjectMainData} from "../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";

export type ProjectSelectionProps = {
    currentProjectIndex: number,
    updateProjectMainData: (projectMainData: ProjectMainData) => void
}