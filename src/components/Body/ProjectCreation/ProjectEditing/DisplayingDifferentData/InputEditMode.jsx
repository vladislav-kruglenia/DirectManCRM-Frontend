import style from "../ProjectEditing.module.css";
import React, {useState} from "react";
import {DisplayingDifferentData} from "./DisplayingDifferentData";

let ValueDisplay = (props) => {
    let [editMode, setEditMode] = useState(false);
    return <>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                <DisplayingDifferentData
                    value={props.valueGlobal}
                    displayType={props.displayType}/></div>
            : <EditModeValue
                type={props.type}
                changeValueGlobal={props.changeValueGlobal}
                idNumbers={props.idNumbers}
                valueGlobal={props.valueGlobal}
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
            {props.type === "number" && <InputNumber
                value={value}
                changeValueHook={(value) => {
                    changeValueHook(value)
                }}/>}
            {props.type === "text" && <InputText
                value={value}
                changeValueHook={(value) => {
                    changeValueHook(value)
                }}/>}

            <button onClick={() => {
                debugger
                props.changeValueGlobal(
                    props.idNumbers,
                    value
                );
                props.setEditMode(false);
            }}>Сохранить
            </button>
        </div>
        <div className={style.transparentLayer} onClick={() => {
            changeValueHook(props.numberGlobal);
            props.setEditMode(false);
        }}>{}</div>
    </div>
};

let InputNumber = (props) =>{
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

let InputText = (props) =>{
  return <input
      onChange={(e) => {
          props.changeValueHook(e.currentTarget.value)
      }}
      type="text"
      value={props.value}
      autoFocus={true}
  />
};

export default ValueDisplay