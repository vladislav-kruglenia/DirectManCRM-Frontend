import style from "./Styles/InputEditMode.module.scss";
import tariffEditingStyle from "./../SecondaryComponents/TariffEditing/TariffEditing.module.scss";
import React, {ChangeEvent, FC, useState} from "react";
import {DisplayingDifferentData} from "./DisplayingDifferentData";
import EditingContacts from "../ClientContacts/ClientContactsForm";
import {
    EditModeValuePropsType,
    FormTypeEnum,
    GrandFormPropsType,
    GrandFormTypeEnum,
    InputFormType,
    InputNumberPropsType,
    InputTextPropsType,
    ValueDisplayPropsType
} from "./Types/InputEditModeTypes";
import {Button, TextField} from "@material-ui/core";


let ValueDisplay: FC<ValueDisplayPropsType> = (props) => {

    let [editModeHook, setEditModeHook] = useState(props.editModeStatus);
    let [editMode, setEditMode] = !props.setEditModeInProps
        ? [editModeHook, setEditModeHook]
        : [props.editModeStatus, props.setEditModeInProps];

    return <>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                <DisplayingDifferentData
                    value={props.valueGlobal}
                    displayComponent={props.displayComponent}
                    displayType={props.displayType}/></div>
            // @ts-ignore //TODO: Type 'FormTypeEnum' is not assignable to type 'FormTypeEnum.grandForm'. Нигде нет FormTypeEnum без свойства
            : <EditModeValue
                type={props.type}
                valueGlobal={props.valueGlobal}
                changeValueGlobal={props.changeValueGlobal}
                idNumbers={props.idNumbers}
                grandFormType={props.grandFormType}
                grandFormComponent = {props.grandFormComponent}
                setEditMode={(status: boolean) => {
                    setEditMode(status)
                }}
            />}
    </>

};

let EditModeValue: FC<EditModeValuePropsType> = (props) => {
    let [value, changeValueHook] = useState(props.valueGlobal as string | number);
    return <div onKeyDown={(event) => {
        if (event.key === "Escape") {
            changeValueHook(props.valueGlobal as string | number);
            // changeValueHook(props.numberGlobal);
            props.setEditMode(false);
        }
    }}>
        <div className={style.editLayer}>
            {props.type !== FormTypeEnum.grandForm
                ? <InputForm
                    type={props.type}
                    value={value}
                    idNumbers={props.idNumbers}
                    changeValueHook={(value: string | number) => {
                        changeValueHook(value)
                    }}
                    setEditMode={(status: boolean) => {
                        props.setEditMode(status)
                    }}
                    changeValueGlobal={props.changeValueGlobal}
                />
                : <GrandForm
                    grandFormType={props.grandFormType}
                    grandFormData={props.valueGlobal}
                    changeValueGlobal={props.changeValueGlobal}
                    grandFormComponent = {props.grandFormComponent}
                    setEditMode={(status: boolean) => {
                        props.setEditMode(status)
                    }}
                />}
        </div>

        <div className={style.transparentLayer}
             onClick={() => {
                 changeValueHook(props.valueGlobal as string | number);
                 // changeValueHook(props.numberGlobal);
                 props.setEditMode(false);
             }}>{}</div>
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
        <TextField className={style.InputText} id="outlined-basic" label="Outlined" variant="outlined"
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       /*let {value} = e.currentTarget;
                       if(value !== ''){
                           changeError(false);*/
                       props.changeValueHook(e.currentTarget.value)
                       /*} else changeError(true)*/
                   }}
                   type="text"
                   value={props.value}
                   autoFocus={true}/>
    </div>

};

let GrandForm: FC<GrandFormPropsType> = (props) => {
    return <>
        {props.grandFormType === GrandFormTypeEnum.contactsEditing &&
        <EditingContacts
            changeValueGlobal={props.changeValueGlobal}
            idNumbers={{idClient: props.grandFormData.idClient}}
            contacts={props.grandFormData}
            setEditMode={(status) => {
                props.setEditMode(status)
            }}
        />}
        {props.grandFormType === GrandFormTypeEnum.serviceEditing && props.grandFormComponent}
    </>
};

export default ValueDisplay