import React, {FC} from 'react';
import style from './ProjectEditing.module.css'
import {AddTariff, DisplayTotalPrice} from "./SecondaryComponents/DirectionEditing/DirectionEditingComponents";
import {
    AddNewService,
    DisplayTariffName,
    DisplayTariffProperties
} from "./SecondaryComponents/TariffEditing/TariffEditingComponents";
import {DisplayServiceData} from "./SecondaryComponents/ServiceEditing/ServiceEditingComponents";
import {NavLink} from "react-router-dom";
import {
    DirectionEditingPropsType,
    ProjectEditingPropsType,
    ServiceEditingPropsType,
    TariffEditingPropsType
} from "./Types/ProjectEditingTypes";
import {ProjectCreationEnum} from "../../../../AppGlobalTypes/TypesComponents";
import {Button, Divider, Typography} from "@material-ui/core";


let ProjectEditing: FC<ProjectEditingPropsType> = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        // values
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        directionTotalPrice={d.directionTotalPrice}
        paymentInFull={d.paymentInFull}
        typeComponent={props.typeComponent}

        // functions
        addTariff={props.addTariff}
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
        changePaymentPackage={props.changePaymentPackage}
        changeServicePrice={props.changeServicePrice}
        changePacketPrice={props.changePacketPrice}
        changeDeadlineTariff={props.changeDeadlineTariff}
        changePaymentInFull={props.changePaymentInFull}
    />);
    return <div className={style.bodyContainer}>
        <Typography className={`${style.ChoiceDirectionTitle}`} component={'h4'} variant={"h4"}>
            Редактировать заказ:
        </Typography>
        {props.servicesAndNamesTariffs.length > 0
            ? directions
            : <div>Нет выбранных направлений</div>}
        <NavLink to={'/admin'}>
            {props.typeComponent === "projectCreation" &&
            <Button href={''} variant={"contained"} color={"primary"} onClick={() => {
                props.saveOrderInfo(
                    props.servicesAndNamesTariffs,
                    props.nameProject,
                    props.userId !== null
                        ? props.userId
                        : ""
                )
            }}>
                Оформить заказ
            </Button>}

            {props.typeComponent === ProjectCreationEnum.editTariffsData &&
            <Button href={''} variant={"contained"} color={"primary"} onClick={() => {
                props.editTariffsInfo(props.directionsAndTariffs)
            }}>
                Сохранить
            </Button>
            }
        </NavLink>

    </div>
};

let DirectionEditing: FC<DirectionEditingPropsType> = (props) => {
    let tariffs = props.namesTariffs.map(t => <TariffEditing
        // values
        key={t.tariffId}
        idDirection={props.idDirection}
        services={t.services}
        tariffId={t.tariffId}
        tariffName={t.tariffName}
        totalPriceTariff={t.totalPrice}
        deadlineTariff={t.deadline}
        paymentPackage={t.paymentPackage}

        // functions
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
        changePaymentPackage={props.changePaymentPackage}
        changeServicePrice={props.changeServicePrice}
        changePacketPrice={props.changePacketPrice}
        changeDeadlineTariff={props.changeDeadlineTariff}
    />);
    return <div>
        <Typography className={`${style.ChoiceDirectionTitle}`} component={'h5'} variant={"h5"}>
            {props.nameDirection}
        </Typography>

        {props.namesTariffs.length > 0
            ? <div>
                {tariffs}
                <AddTariff addTariff={props.addTariff} idDirection={props.idDirection}/>
                <DisplayTotalPrice
                    paymentInFull={props.paymentInFull}
                    changePaymentInFull={props.changePaymentInFull}
                    idDirection={props.idDirection}
                    directionTotalPrice={props.directionTotalPrice}
                />
            </div>
            : <div>
                Нет выбранных тарифов
                <AddTariff addTariff={props.addTariff} idDirection={props.idDirection}/>
            </div>}
    </div>
};

let TariffEditing: FC<TariffEditingPropsType> = (props) => {
    let services = props.services.map(s => <ServiceEditing
        // values
        key={s.serviceId}
        serviceName={s.serviceName}
        serviceId={s.serviceId}
        servicePrice={s.servicePrice}
        idDirection={props.idDirection}
        tariffId={props.tariffId}

        // functions
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeServicePrice={props.changeServicePrice}
    />);
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId
    };
    return <div>
        <DisplayTariffName
            tariffName={props.tariffName}
            changeTariffName={props.changeTariffName}
            idNumbers={idNumbers}
            changeTariffStatus={props.changeTariffStatus}
            tariffId={props.tariffId}
            idDirection={props.idDirection}
        />


        <Divider component={'div'}/>


        {props.services.length > 0
            ? services
            : <div>Нет услуг</div>}
        <AddNewService
            addService={props.addService}
            idDirection={props.idDirection}
            tariffId={props.tariffId}
        />
        <DisplayTariffProperties
            changePaymentPackage={props.changePaymentPackage}
            paymentPackage={props.paymentPackage}
            tariffId={props.tariffId}
            idDirection={props.idDirection}
            totalPriceTariff={props.totalPriceTariff}
            changePacketPrice={props.changePacketPrice}
            deadlineTariff={props.deadlineTariff}
            changeDeadlineTariff={props.changeDeadlineTariff}
            idNumbers={idNumbers}
        />
    </div>
};

let ServiceEditing: FC<ServiceEditingPropsType> = (props) => {
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId,
        idService: props.serviceId
    };
    return <div>
        <DisplayServiceData
            serviceName={props.serviceName}
            changeServiceName={props.changeServiceName}
            servicePrice={props.servicePrice}
            changeServicePrice={props.changeServicePrice}
            deleteService={props.deleteService}
            idNumbers={idNumbers}
        />
    </div>
};

export default ProjectEditing
