import React, {FC} from "react";
import style from '../../../Styles/ProjectCreation.module.scss'
import {PropsTypes} from "./Types/ProjectNameTypes";
import {Typography} from "@material-ui/core";
import {DisplayTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {ValueDisplay} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";

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
