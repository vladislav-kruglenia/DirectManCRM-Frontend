import style from "./ProjectEditing.module.css";
import React, {useState} from "react";

export let TextDisplay = (props) => {
    let [editModeText, setEditModeText] = useState(false);
    return <>
        {!editModeText
            ? <div onDoubleClick={() => setEditModeText(true)}>
                {props.nameGlobal}
            </div>
            : <EditModeText
                changeNameGlobal={props.changeNameGlobal}
                idNumbers={props.idNumbers}
                nameGlobal={props.nameGlobal}
                setEditMode={(status) => {
                    setEditModeText(status)
                }}
            />}
    </>

};

let EditModeText = (props) => {
    let [name, changeNameHook] = useState(props.nameGlobal);
    return <div>
        <div className={style.editLayer}>
            <input
                onChange={(e) => {
                    changeNameHook(e.currentTarget.value)
                }}
                type="text"
                value={name}
                autoFocus={true}
            />
            <button onClick={() => {
                props.changeNameGlobal(
                    props.idNumbers,
                    name
                );
                props.setEditMode(false);
            }}>Сохранить
            </button>
        </div>
        <div className={style.transparentLayer} onClick={() => {
            changeNameHook(props.nameGlobal);
            props.setEditMode(false);
        }}>{}</div>
    </div>
};

export default EditModeText