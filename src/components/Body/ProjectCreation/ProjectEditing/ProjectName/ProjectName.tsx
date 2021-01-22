import React, {FC} from "react";
import style from '../../Styles/ProjectCreation.module.scss'
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";
import {PropsTypes} from "./Types/ProjectNameTypes";
import {FormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {Typography} from "@material-ui/core";

export let ProjectName: FC<PropsTypes> = ({nameProject, changeNameProject}) => {
    return <div className={style.Typography}>
        <Typography  component={'div'} variant={'h4'}>
            <ValueDisplay
                inputLabel={'Название проекта'}
                valueGlobal={nameProject}
                changeValueGlobal={changeNameProject}
                idNumbers={{}}
                displayType={DisplayTypeEnum.text}
                type={FormTypeEnum.text}
                editModeStatus = {false}
            />
        </Typography>
    </div>
};

/*
let checkProjectName = (changeNameProject)*/
