import {ProjectTabData} from "../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";

export type ProjectsBrowserProps = {
    projectsViewed: ProjectTabData[],
    currentProjectIndex: number,
    updateCurrentProjectIndex: (index: number) => void,
}

