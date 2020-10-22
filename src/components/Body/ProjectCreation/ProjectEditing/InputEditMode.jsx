import style from "./ProjectEditing.module.css";
import React from "react";

export let EditMode = (props) => {
    return <div>
        <div className={style.editLayer}>
            <input
                onChange={(e) => {
                debugger
                    props.changeNameHook(e.currentTarget.value)
                }}
                type="text"
                value={props.nameLocal}
                autoFocus={true}
            />
            <button onClick={() => {
                props.changeNameGlobal(
                    props.idNumbers,
                    props.nameLocal
                );
                props.setEditMode(false);
            }}>Сохранить
            </button>
        </div>
        <div className={style.transparentLayer} onClick={() => {
            props.changeNameHook(props.nameGlobal);
            props.setEditMode(false);
        }}>{}</div>
    </div>
};