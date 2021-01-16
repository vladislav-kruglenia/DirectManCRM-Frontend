import React, {FC, useState} from "react";
import style from "./ServiceEditing.module.scss"
import {
    DeleteServicePropsType,
    DisplayServiceDataPropsType,
    DisplayServiceNamePropsType,
    DisplayServicePricePropsType, EditServiceFormPropsType,
    ServiceDataPropsType
} from "../Types/ServiceEditingTypes";
import {Button, IconButton, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as yup from 'yup';
import {useFormik} from "formik";
import ValueDisplay from "../../DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum, GrandFormTypeEnum} from "../../DisplayingDifferentData/Types/InputEditModeTypes";
import {ServiceDataType} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export let DisplayServiceData: FC<DisplayServiceDataPropsType> = (props) => {
    let [editModeStatus, changeEditModeStatus] = useState(props.serviceName === null || props.serviceName === "");
    let serviceData: ServiceDataType = {
        serviceName: props.serviceName,
        servicePrice: props.servicePrice
    };
    return <div className={style.DisplayServiceDataContainer}>
        <ValueDisplay
            editModeStatus={editModeStatus}
            valueGlobal={serviceData}
            displayType={DisplayTypeEnum.component}
            type={FormTypeEnum.grandForm}
            changeValueGlobal={props.changeServiceInfo}
            idNumbers={props.idNumbers}
            grandFormType={GrandFormTypeEnum.serviceEditing}
            setEditModeInProps={changeEditModeStatus}
            displayComponent={<ServiceData
                serviceName={props.serviceName}
                servicePrice={props.servicePrice}
            />}
            grandFormComponent={<EditServiceForm
                changeServiceInfo={props.changeServiceInfo}
                idNumbers={props.idNumbers}
                serviceData={serviceData}
                setEditMode={(status) => {
                    changeEditModeStatus(status)
                }}
            />}
        />
        {/*<DisplayServiceName
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
        />*/}
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
        {props.serviceName}
    </div>
};

export let DisplayServicePrice: FC<DisplayServicePricePropsType> = (props) => {
    return <div>
        {props.servicePrice} р.
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

export let ServiceData: FC<ServiceDataPropsType> = (props) => {
    return <>
        <DisplayServiceName
            serviceName={props.serviceName}
        /> -
        <DisplayServicePrice
            servicePrice={props.servicePrice}
        />
    </>
};

export let EditServiceForm: FC<EditServiceFormPropsType> = (props) => {
    const validationSchema = yup.object({
        serviceName: yup
            .string()
            .required('Это поле обязательно'),
        servicePrice: yup
            .number()
            .min(1, 'Услуга не может быть бесплатной')
            .required('Это поле обязательно'),
    });
    let valuesForm: ServiceDataType = {
        serviceName: props.serviceData.serviceName,
        servicePrice: props.serviceData.servicePrice
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.changeServiceInfo(props.idNumbers, values);
            props.setEditMode(false)
        }
    });
    return <>
        <form onSubmit={Form.handleSubmit}>
            <TextField id="serviceName" label="Название услуги" variant="outlined"
                       value={Form.values.serviceName}
                       onChange={Form.handleChange}
                       error={Form.touched.serviceName && Boolean(Form.errors.serviceName)}
                       helperText={Form.touched.serviceName && Form.errors.serviceName}
            />
            <TextField id="servicePrice" label="Стоимость" variant="outlined"
                       type="number"
                       value={Form.values.servicePrice}
                       onChange={Form.handleChange}
                       error={Form.touched.servicePrice && Boolean(Form.errors.servicePrice)}
                       helperText={Form.touched.servicePrice && Form.errors.servicePrice}
            />
            <Button href={''} color="primary" variant="contained" type="submit">
                Сохранить
            </Button>
        </form>
    </>
};


