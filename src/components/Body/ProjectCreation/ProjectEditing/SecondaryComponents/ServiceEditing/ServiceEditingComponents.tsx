import React, {FC, useState} from "react";
import ValueDisplay from "../../DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../DisplayingDifferentData/Types/InputEditModeTypes";
import {
    DeleteServicePropsType, DisplayServiceDataPropsType,
    DisplayServiceNamePropsType,
    DisplayServicePricePropsType
} from "../Types/ServiceEditingTypes";
import style from "./ServiceEditing.module.scss"
import {DisplayTypeEnum} from "../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export let DisplayServiceData: FC<DisplayServiceDataPropsType> = (props) => {
    let [editModeStatus, changeEditModeStatus] = useState(props.serviceName === null || props.serviceName === "");
    return <div className={style.DisplayServiceDataContainer}>
        <DisplayServiceName
            serviceName={props.serviceName}
            changeServiceName={props.changeServiceName}
            idNumbers={props.idNumbers}
            editModeStatus={editModeStatus}
            changeEditModeStatus={(status) => {
                changeEditModeStatus(status)
            }}
        />
        <DisplayServicePrice
            servicePrice={props.servicePrice}
            changeServicePrice={props.changeServicePrice}
            idNumbers={props.idNumbers}
            editModeStatus={editModeStatus}
            changeEditModeStatus={(status) => {
                changeEditModeStatus(status)
            }}
        />
        <DeleteService
            deleteService={props.deleteService}
            idNumbers={props.idNumbers}
            changeEditModeStatus={(status) => {
                changeEditModeStatus(status)
            }}
        />
    </div>
};


export let DisplayServiceName: FC<DisplayServiceNamePropsType> = (props) => {
    return <div>
        <ValueDisplay
            setEditModeInProps={value => props.changeEditModeStatus(value)}
            editModeStatus={props.editModeStatus}
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
            editModeStatus={props.editModeStatus}
            setEditModeInProps={value => props.changeEditModeStatus(value)}
        />
    </div>
};

export let DeleteService: FC<DeleteServicePropsType> = (props) => {
    return <div>
        <IconButton color={"primary"} size={"small"} href={''} onClick={() => {
            props.changeEditModeStatus(true)
        }}>
            <EditIcon/>
        </IconButton>
        <IconButton color={"secondary"} size={"small"} href={''} onClick={() => {
            props.deleteService(props.idNumbers)
        }}>
            <DeleteIcon/>
        </IconButton>
    </div>
};


