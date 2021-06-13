import {ProjectMainData} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {ProjectStatus} from "../../../../../../../../../../../../../../Redux/Reducers/Account/Types/Account.enums";

export type ProjectSelectionContainerProps = {
    userId: string,
    // currentProjectIndex: number,
    updateProjectMainData: (projectMainData: ProjectMainData, currentProjectIndex: number, projectStatus: ProjectStatus | "") => void,
}