import style from "./Styles/InputEditMode.module.scss";
import tariffEditingStyle from "../../../components/Body/ProjectCreation/Components/ProjectEditing/SecondaryComponents/TariffEditing/TariffEditing.module.scss";
import React, {ChangeEvent, FC, useState} from "react";
import {DisplayingDifferentData} from "./DisplayingDifferentData";
import {
    EditModeValuePropsType,
    FormTypeEnum,
    InputFormType,
    InputNumberPropsType,
    InputTextPropsType,
    ValueDisplayPropsType
} from "./Types/InputEditModeTypes";
import {Button, TextField} from "@material-ui/core";


export let ValueDisplay: FC<ValueDisplayPropsType> = (props) => {
    let [editModeHook, setEditModeHook] = useState(props.editModeStatus);
    let [editMode, setEditMode] = !props.setEditModeInProps
        ? [editModeHook, setEditModeHook]
        : [props.editModeStatus, props.setEditModeInProps];

    return <div className={style.ValueDisplay}>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                <DisplayingDifferentData
                    value={props.valueGlobal}
                    displayComponent={props.displayComponent}
                    displayType={props.displayType}/></div>
            // @ts-ignore //TODO: Type 'FormTypeEnum' is not assignable to type 'FormTypeEnum.grandForm'. Нигде нет FormTypeEnum без свойства
            : <EditModeValue
                inputLabel={props.inputLabel}
                type={props.type}
                valueGlobal={props.valueGlobal}
                changeValueGlobal={props.changeValueGlobal}
                idNumbers={props.idNumbers || {}}
                grandFormType={props.grandFormType}
                grandFormComponent = {props.grandFormComponent}
                isNotAllowedToExitEditMode={props.isNotAllowedToExitEditMode || false}
                setEditMode={(status: boolean) => {
                    setEditMode(status)
                }}
            />}
    </div>

};

let EditModeValue: FC<EditModeValuePropsType> = (props) => {
    let [value, changeValueHook] = useState(props.valueGlobal as string | number);

    let exitEditMode = () => {
        if (!props.isNotAllowedToExitEditMode) {
            changeValueHook(props.valueGlobal as string | number);
            // changeValueHook(props.numberGlobal);
            props.setEditMode(false);
        }
    };
    return <div onKeyDown={(event) => {
        if (event.key === "Escape") exitEditMode()
    }}>
        <div className={style.editLayer}>
            {props.type !== FormTypeEnum.grandForm
                ? <InputForm
                    type={props.type}
                    value={value}
                    idNumbers={props.idNumbers}
                    inputLabel={props.inputLabel}
                    changeValueHook={(value: string | number) => {
                        changeValueHook(value)
                    }}
                    setEditMode={(status: boolean) => {
                        props.setEditMode(status)
                    }}
                    changeValueGlobal={props.changeValueGlobal}
                />
                : props.grandFormComponent
            }
        </div>

        <div className={style.transparentLayer}
             onClick={() => exitEditMode()}>{}</div>
    </div>
};

let InputForm: FC<InputFormType> = (props) => {
    let saveData = () => {
        props.changeValueGlobal(
            props.idNumbers,
            props.value
        );
        props.setEditMode(false);
    };
    return <div onKeyPress={(event) => {
        if (event.key === "Enter") saveData();
    }}>

        {props.type === FormTypeEnum.number && <InputNumber
            value={props.value}
            changeValueHook={(value: number) => {
                props.changeValueHook(value)
            }}/>}
        {props.type === FormTypeEnum.text && <InputText
            inputLabel={props.inputLabel}
            value={props.value}
            changeValueHook={(value: string) => {
                props.changeValueHook(value)
            }}/>}

        <Button href={''} variant={"outlined"} size={"small"} onClick={() => {
            saveData()
        }}>Сохранить
        </Button>
    </div>
};

let InputNumber: FC<InputNumberPropsType> = (props) => {
    let [error, changeError] = useState(false);
    return <div className={tariffEditingStyle.InputNumber}>
        <TextField className={style.InputNumber} id="outlined-basic" label="Outlined" variant="outlined"
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       let value = parseInt(e.currentTarget.value);
                       if (value > -1) {
                           changeError(false);
                           props.changeValueHook(value)
                       } else {
                           changeError(true)
                       }
                   }}
                   type="number"
                   value={props.value}
                   autoFocus={true}
                   error={error}
        />
    </div>
};

let InputText: FC<InputTextPropsType> = (props) => {
    return <div>
        <TextField className={style.InputText} id="outlined-basic" label={props.inputLabel} variant="outlined"
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       props.changeValueHook(e.currentTarget.value)
                   }}
                   type="text"
                   value={props.value}
                   autoFocus={true}/>
    </div>

};
