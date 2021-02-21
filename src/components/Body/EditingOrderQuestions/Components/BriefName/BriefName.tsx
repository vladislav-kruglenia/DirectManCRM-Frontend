import React, {FC, useState} from "react";
import style from "./BriefName.module.scss"
import {Typography} from "@material-ui/core";
import {
    BriefNameFormProps,
    BriefNameProps,
    DisplayBriefNameProps,
    EditBriefNameType,
    EditProps
} from "./Types/BriefNameTypes";
import {EditButton} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {OneInputText} from "../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/OneInputText";
import {ValueDisplay} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {editBriefName} from "../../../../../redux/editingOrderQuestionsReducer"
import {useDispatch} from "react-redux";
import {EditBriefNamePayload} from "../../../../../redux/Types/EditingOrderQuestions/ActionPayloadsTypes";

export let BriefName: FC<BriefNameProps> = (props) => {
    let dispatch = useDispatch();
    let editBriefNameAction:EditBriefNameType = (briefName) => {
        let action: EditBriefNamePayload = {briefName};
        return dispatch(editBriefName(action))
    };
    let [editMode, setEditMode] = useState(false);

    return <div className={style.BriefName}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            editModeStatus={editMode}
            displayType={DisplayTypeEnum.component}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={<DisplayBriefName briefName={props.briefName} openEditMode={() => setEditMode(true)}/>}
            grandFormComponent={<BriefNameForm
                briefName={props.briefName}
                exitEditMode={() => setEditMode(false)}
                editBriefName={briefName => editBriefNameAction(briefName)}
            />}
        />
    </div>
};

export let DisplayBriefName: FC<DisplayBriefNameProps> = (props) => {
    return <div className={style.DisplayBriefName}>
        <Typography component={'span'} className={style.text} variant={'h4'}>{props.briefName}</Typography>
        <Edit openEditMode={() => props.openEditMode()}/>
    </div>
};


export let Edit:FC<EditProps> = (props) => {
    return <div className={style.EditAndDelete}>
        <div className={style.button}>
            <EditButton
                size={"medium"}
                onClickFunc={() => props.openEditMode()}
            />
        </div>
    </div>
};

export let BriefNameForm:FC<BriefNameFormProps> = (props) => {
    return <div>
        <OneInputText
            label={"Название брифа"}
            textFieldSize={"medium"}
            formValue={props.briefName}
            editText={briefName => props.editBriefName(briefName)}
            exitEditMode={() => props.exitEditMode()}
        />
    </div>
};

