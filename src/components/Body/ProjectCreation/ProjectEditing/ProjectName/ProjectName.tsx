import React, {FC} from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";
import {PropsTypes} from "./Types/ProjectNameTypes";
import {FormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export let ProjectName: FC<PropsTypes> = (props) => {
    let nameProject = props.nameProject;
    return <div>
        <h2>
            <ValueDisplay
                valueGlobal={nameProject}
                changeValueGlobal={props.changeNameProject}
                idNumbers={{}}
                displayType={DisplayTypeEnum.text}
                type={FormTypeEnum.text}
                editModeStatus = {false}
            />
        </h2>
    </div>
};

/*
let checkProjectName = (changeNameProject)*/
