import style from "../ProjectEditing.module.css";
import React, {useState} from "react";
import {DisplayingDifferentData} from "./DisplayingDifferentData";
import EditingContacts from "../ClientContacts/ClientContactsForm";

let ValueDisplay = (props) => {
    let [editMode, setEditMode] = useState(false);
    return <>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                <DisplayingDifferentData
                    value={props.valueGlobal}
                    displayComponent={props.displayComponent}
                    displayType={props.displayType}/></div>
            : <EditModeValue
                type={props.type}
                valueGlobal={props.valueGlobal}
                changeValueGlobal={props.changeValueGlobal}
                idNumbers={props.idNumbers}
                grandFormType={props.grandFormType}
                setEditMode={(status) => {
                    setEditMode(status)
                }}
            />}
    </>

};

let EditModeValue = (props) => {
    let [value, changeValueHook] = useState(props.valueGlobal);
    return <div>
        <div className={style.editLayer}>
            {props.type !== "grandForm"
                ? <InputForm
                    type={props.type}
                    value={value}
                    idNumbers={props.idNumbers}
                    changeValueHook={(value) => {
                        changeValueHook(value)
                    }}
                    setEditMode={(status) => {
                        props.setEditMode(status)
                    }}
                    changeValueGlobal={props.changeValueGlobal}
                />
                : <GrandForm
                    grandFormType={props.grandFormType}
                    grandFormData={props.valueGlobal}
                    changeValueGlobal={props.changeValueGlobal}
                    setEditMode={(status) => {
                        props.setEditMode(status)
                    }}
                />}
        </div>
        <div className={style.transparentLayer} onClick={() => {
            changeValueHook(props.numberGlobal);
            props.setEditMode(false);
        }}>{}</div>
    </div>
};

let InputForm = (props) => {
    return <>
        {props.type === "number" && <InputNumber
            value={props.value}
            changeValueHook={(value) => {
                props.changeValueHook(value)
            }}/>}
        {props.type === "text" && <InputText
            value={props.value}
            changeValueHook={(value) => {
                props.changeValueHook(value)
            }}/>}

        <button onClick={() => {
        debugger
            props.changeValueGlobal(
                props.idNumbers,
                props.value
            );
            props.setEditMode(false);
        }}>Сохранить
        </button>
    </>
};

let InputNumber = (props) => {
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

let InputText = (props) => {
    return <input
        onChange={(e) => {
            props.changeValueHook(e.currentTarget.value)
        }}
        type="text"
        value={props.value}
        autoFocus={true}
    />
};

let GrandForm = (props) => {
    return <>
        {props.grandFormType === "contactsEditing" &&
        <EditingContacts
            changeValueGlobal={props.changeValueGlobal}
            idNumbers={props.grandFormData.id}
            contacts={props.grandFormData}
            setEditMode={(status) => {
                props.setEditMode(status)
            }}
        />}
    </>
};

export default ValueDisplay