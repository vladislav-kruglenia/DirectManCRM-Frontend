import React, {FC, useState} from "react";
import style from "./ServiceEditing.module.scss"
import {
    DeleteServicePropsType,
    DisplayServiceDataPropsType,
    EditServiceFormPropsType,
    ServiceDataPropsType
} from "../Types/ServiceEditingTypes";
import {Button, IconButton, TextField, Typography} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as yup from 'yup';
import {useFormik} from "formik";
import {ServiceDataType} from "../../../../../../../../../Redux/Reducers/ProjectCreation/Types/ProjectCreation.types";
import {DisplayTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {
    FormTypeEnum,
    GrandFormTypeEnum
} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {ValueDisplay} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";

export let DisplayServiceData: FC<DisplayServiceDataPropsType> = (props) => {
    let [editModeStatus, changeEditModeStatus] = useState(props.serviceName === null || props.serviceName === "");
    let serviceData: ServiceDataType = {
        serviceName: props.serviceName,
        servicePrice: props.servicePrice
    };
    return <div className={style.DisplayServiceDataContainer}>
        <div className={style.DisplayServiceData}>
            <ValueDisplay
                displayType={DisplayTypeEnum.component}
                type={FormTypeEnum.grandForm}
                grandFormType={GrandFormTypeEnum.UniversalComponent}
                editModeStatus={editModeStatus}
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
        </div>


        <DeleteService
            deleteService={props.deleteService}
            idNumbers={props.idNumbers}
            changeEditModeStatus={(status) => {
                changeEditModeStatus(status)
            }}
        />
    </div>
};

export let ServiceData: FC<ServiceDataPropsType> = (props) => {
    return <div className={style.ServiceData}>
        <div className={style.ServiceName}>
            <Typography component={'div'} variant={"subtitle1"}>{props.serviceName}</Typography>
        </div>
        <div className={style.ServicePrice}>
            <Typography component={'div'} variant={"subtitle1"}>{props.servicePrice} Р.</Typography>
        </div>


    </div>
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
            <div className={style.ServiceData}>
                <TextField className={style.serviceNameInput} id="serviceName"
                           label="Название услуги" variant="outlined" size={"small"}
                           value={Form.values.serviceName}
                           onChange={Form.handleChange}
                           error={Form.touched.serviceName && Boolean(Form.errors.serviceName)}
                           helperText={Form.touched.serviceName && Form.errors.serviceName}
                           autoFocus={true}
                />
                <TextField className={style.servicePriceInput} id="servicePrice"
                           label="Стоимость" variant="outlined" size={"small"}
                           type="number"
                           value={Form.values.servicePrice}
                           onChange={Form.handleChange}
                           error={Form.touched.servicePrice && Boolean(Form.errors.servicePrice)}
                           helperText={Form.touched.servicePrice && Form.errors.servicePrice}
                />
            </div>
            <div className={style.serviceEditButton}>
                <Button size={"small"} href={''} color="default" variant="outlined" type="submit">
                    Сохранить
                </Button>
            </div>

        </form>
    </>
};


export let DeleteService: FC<DeleteServicePropsType> = (props) => {
    return <div className={style.DeleteService}>
        <IconButton color={"default"} size={"small"} href={''} onClick={() => {
            props.changeEditModeStatus(true)
        }}>
            <EditIcon/>
        </IconButton>
        <IconButton color={"default"} size={"small"} href={''} onClick={() => {
            props.deleteService(props.idNumbers)
        }}>
            <DeleteIcon/>
        </IconButton>
    </div>
};




