import style from "./ProjectsSelectionContainerTitle.module.scss"
import {MainProjectDataKeys} from "../../../Types/ProjectSelection.types";

export const useBackgroundTitleColor = (projectType: MainProjectDataKeys) => {
    let backgroundStyle = style.inProgressBackground;
    switch (projectType) {
        case "completedProjects":
            backgroundStyle = style.completedBackground;
            break;
        case "frozenProjects":
            backgroundStyle = style.frozenBackground;
            break;
        case "managedProjects":
            backgroundStyle = style.managedBackground;
            break;
        case "projectsInProgress":
            backgroundStyle = style.inProgressBackground;
            break;
    }
    return backgroundStyle;
};