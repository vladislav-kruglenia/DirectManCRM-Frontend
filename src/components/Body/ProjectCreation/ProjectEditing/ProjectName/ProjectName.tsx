import React, {FC} from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";
import {PropsTypes} from "./Types/ProjectNameTypes";
import {FormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {Typography} from "@material-ui/core";
import styles from "./Styles/Styles.module.scss"

export let ProjectName: FC<PropsTypes> = (props) => {
    let nameProject = props.nameProject;
    return <>
        <Typography className={`${styles.ProjectNameContainer}`} component={'div'} variant={'h4'}>
            <ValueDisplay
                valueGlobal={nameProject}
                changeValueGlobal={props.changeNameProject}
                idNumbers={{}}
                displayType={DisplayTypeEnum.text}
                type={FormTypeEnum.text}
                editModeStatus = {false}
            />
        </Typography>
    </>
};

/*
let checkProjectName = (changeNameProject)*/
