import React, {FC} from "react";
import style from "./ProjectsSelectionContainerTitle.module.scss"
import {Typography} from "@material-ui/core";
import {ProjectsSelectionContainerTitleProps} from "./ProjectsSelectionContainerTitle.types";
import {useBackgroundTitleColor} from "./ProjectsSelectionContainerTitle.hooks";

export const ProjectsSelectionContainerTitle:FC<ProjectsSelectionContainerTitleProps> = (props) => {
    const {title, projectType} = props;
    const backgroundClass = useBackgroundTitleColor(projectType);

    return (
        <Typography className={style.ProjectsSelectionContainerTitle} component={'div'} variant={'h6'}>
            <div className={`${style.titleWrapper} ${backgroundClass}`}>
                {title}
            </div>
        </Typography>
    )
};