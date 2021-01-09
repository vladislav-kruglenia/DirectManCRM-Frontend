import React, {FC} from "react";
import ValueDisplay from "../../DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../DisplayingDifferentData/Types/InputEditModeTypes";
import {
    DeleteServicePropsType,
    DisplayServiceNamePropsType,
    DisplayServicePricePropsType
} from "../Types/ServiceEditingTypes";
import {DisplayTypeEnum} from "../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export let DisplayServiceName: FC<DisplayServiceNamePropsType> = (props) => {
    let editModeStatus = props.serviceName === null;
    return <div>
        <ValueDisplay
            editModeStatus={editModeStatus}
            valueGlobal={props.serviceName}
            changeValueGlobal={props.changeServiceName}
            idNumbers={props.idNumbers}
            displayType={DisplayTypeEnum.text}
            type={FormTypeEnum.text}
        />
    </div>
};

export let DisplayServicePrice: FC<DisplayServicePricePropsType> = (props) => {
    return <div>
        <ValueDisplay
            valueGlobal={props.servicePrice}
            changeValueGlobal={props.changeServicePrice}
            idNumbers={props.idNumbers}
            displayType={DisplayTypeEnum.price}
            type={FormTypeEnum.number}
            editModeStatus={false}
        />
    </div>
};


export let DeleteService: FC<DeleteServicePropsType> = (props) => {
    return <div>
        <button onClick={() => {
            props.deleteService(props.idNumbers)
        }}>
            Удалить услугу
        </button>
    </div>
};


