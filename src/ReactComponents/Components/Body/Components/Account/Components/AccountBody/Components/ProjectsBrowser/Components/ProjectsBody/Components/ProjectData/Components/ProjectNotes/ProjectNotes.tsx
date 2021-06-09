import React, {FC, useState} from "react";
import style from "./ProjectNotes.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import NotesIcon from '@material-ui/icons/Notes';
import {ProjectNotesProps} from "./ProjectNotes.types";
import {DisplayProjectNotes} from "./Components/DisplayProjectNotes/DisplayProjectNotes";
import {ProjectNotesForm} from "./Components/ProjectNotesForm/ProjectNotesForm";
import {ValueDisplay} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export const ProjectNotes:FC<ProjectNotesProps> = (props) => {
    const {projectNotes} = props;
    const [editMode, setEditMode] = useState(false);

    return <section className={style.ProjectNotes}>
        <TitleComponent titleIcon={<NotesIcon />} titleText={'Примечания к проекту'}/>

        <ValueDisplay
            editModeStatus={editMode}
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            setEditModeInProps={setEditMode}
            displayComponent={<DisplayProjectNotes projectNotes={projectNotes}/>}
            grandFormComponent={<ProjectNotesForm
                textForm={projectNotes}
                editText={text => {}}
                exitEditMode={() => setEditMode(false)}
            />}
        />


    </section>
};



