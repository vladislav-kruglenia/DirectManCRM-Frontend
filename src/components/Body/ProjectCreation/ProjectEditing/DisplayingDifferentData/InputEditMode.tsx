import style from "../ProjectEditing.module.css";
import React, {FC, useState} from "react";
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

let ValueDisplay: FC<ValueDisplayPropsType> = (props) => {
    let [editMode, setEditMode] = useState(props.editModeStatus || false);
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
                setEditMode={(status: boolean) => {
                    setEditMode(status)
                }}
            />}
    </>

};

let EditModeValue: FC<EditModeValuePropsType> = (props) => {
    let [value, changeValueHook] = useState(props.valueGlobal as string | number);
    return <div onKeyDown={(event) =>{
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
        <button onClick={() => {
            saveData()
        }}>Сохранить
        </button>
    </div>
};

let InputNumber: FC<InputNumberPropsType> = (props) => {
    return <input
        onChange={(e) => {
            props.changeValueHook(parseInt(e.currentTarget.value))
        }}
        type="number"
        min={0}
        max={1000000}
        value={props.value}
        autoFocus={true}
    />
};

let InputText: FC<InputTextPropsType> = (props) => {
    return <input
        onChange={(e) => {
            props.changeValueHook(e.currentTarget.value)
        }}
        type="text"
        value={props.value}
        autoFocus={true}
    />
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
    </>
};

export default ValueDisplay