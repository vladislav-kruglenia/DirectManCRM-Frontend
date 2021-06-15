import React, {FC, useState} from "react";
import {ProjectNameTypeProps} from "./ProjectName.types";
import {DisplayProjectName} from "./Components/DisplayProjectName/DisplayProjectName";
import {ValueDisplay} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {ProjectNameForm} from "./Components/ProjectNameForm/ProjectNameForm";


export const ProjectName: FC<ProjectNameTypeProps> = (props) => {
    const {projectName, isAccessToEdit} = props;
    const [editMode, setEditMode] = useState(false);
    const DisplayProjectNameComponent = <DisplayProjectName projectName={props.projectName}/>;

    if(isAccessToEdit) return (
        <ValueDisplay
            displayType={DisplayTypeEnum.component}
            type={FormTypeEnum.grandForm}
            editModeStatus={editMode}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={DisplayProjectNameComponent}
            grandFormComponent={<ProjectNameForm
                projectName={projectName}
                exitEditMode={() => setEditMode(false)}
            />}
        />
    );

    return DisplayProjectNameComponent;
};


