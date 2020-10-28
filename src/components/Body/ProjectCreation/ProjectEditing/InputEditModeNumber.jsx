import style from "./ProjectEditing.module.css";
import React, {useState} from "react";

let PriceDisplay = (props) => {
    let [editModePrice, setEditModePrice] = useState(false);
    return <>
        {!editModePrice
            ? <div onDoubleClick={() => setEditModePrice(true)}>
                {`${props.servicePrice} р.`}</div>
            : <EditModeNumber
                changeNameGlobal={props.changeServicePrice}
                idNumbers={props.idNumbers}
                numberGlobal={props.servicePrice}
                setEditMode={(status) => {
                    setEditModePrice(status)
                }}
            />}
    </>

};

let EditModeNumber = (props) => {
    let [number, changeNumberHook] = useState(props.numberGlobal);
    return <div>
        <div className={style.editLayer}>
            <input
                onChange={(e) => {
                    changeNumberHook(parseInt(e.currentTarget.value))
                }}
                type="number"
                min={0}
                max={1000000}
                value={number}
                autoFocus={true}
            />
            <button onClick={() => {
                props.changeNameGlobal(
                    props.idNumbers,
                    number
                );
                props.setEditMode(false);
            }}>Сохранить
            </button>
        </div>
        <div className={style.transparentLayer} onClick={() => {
            changeNumberHook(props.numberGlobal);
            props.setEditMode(false);
        }}>{}</div>
    </div>
};

export default PriceDisplay