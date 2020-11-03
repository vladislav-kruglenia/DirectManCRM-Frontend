import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let DisplayServiceName = (props) => {
    return <div>
        <ValueDisplay
            valueGlobal={props.serviceName}
            changeValueGlobal={props.changeServiceName}
            idNumbers={props.idNumbers}
            displayType={"text"}
            type={"text"}
        />
    </div>
};

export let DisplayServicePrice = (props) => {
    return <div>
        <ValueDisplay
            valueGlobal={props.servicePrice}
            changeValueGlobal={props.changeServicePrice}
            idNumbers={props.idNumbers}
            displayType={"price"}
            type={"number"}
        />
    </div>
};
export let DeleteService = (props) => {
    return <div>
        <button onClick={() => {
            props.deleteService(props.idNumbers)
        }}>
            Удалить услугу
        </button>
    </div>
};


