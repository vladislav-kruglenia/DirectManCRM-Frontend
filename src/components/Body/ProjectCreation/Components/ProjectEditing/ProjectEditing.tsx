import React, {FC} from 'react';
import style from './ProjectEditing.module.scss'
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
import {Button, Divider, Typography} from "@material-ui/core";
import {NoDirections, NoTariffs} from "./Errors/ErrorsComponents";
import {ProjectCreationEnum} from "../../../../../AppGlobal/AppGlobalTypes/TypesComponents";


let ProjectEditing: FC<ProjectEditingPropsType> = (props) => {
    let isChooseDirection = props.servicesAndNamesTariffs.length > 0;
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
        changeServiceInfo={props.changeServiceInfo}
    />);
    return <div className={style.ProjectEditing}>
        {
            isChooseDirection
                ? directions
                : <NoDirections
                    typeMainComponent={props.typeComponent}
                />
        }
        <div className={style.buttons}>
            <NavLink to={`/${props.typeComponent}/tariff-plans`}>
                <Button href={''} variant="outlined" color="primary">Назад</Button>
            </NavLink>
            {
                isChooseDirection &&
                <NavLink to={'/admin'}>
                    {
                        props.typeComponent === "projectCreation" &&
                        <Button href={''} variant={"contained"} color={"primary"} disabled={!isChooseDirection}
                                onClick={() => {
                                    props.saveOrderInfo(
                                        props.servicesAndNamesTariffs,
                                        props.nameProject,
                                        props.userId !== null
                                            ? props.userId
                                            : ""
                                    )
                                }}>
                            Оформить заказ
                        </Button>
                    }

                    {
                        props.typeComponent === ProjectCreationEnum.editTariffsData &&
                        <Button href={''} variant={"contained"} color={"primary"} disabled={!isChooseDirection}
                                onClick={() => {
                                    props.editTariffsInfo(props.directionsAndTariffs)
                                }}>
                            Сохранить
                        </Button>
                    }
                </NavLink>
            }
        </div>
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
        changeServiceInfo={props.changeServiceInfo}
    />);
    return <div className={style.DirectionEditing}>
        <Typography className={style.directionTitle} component={'h5'} variant={"h5"}>
            {props.nameDirection}
        </Typography>

        {props.namesTariffs.length > 0
            ? <div className={style.tariffs}>
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
                <NoTariffs typeMainComponent={props.typeComponent}/>
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
        changeServiceInfo={props.changeServiceInfo}
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

        <div className={style.services}>
            {props.services.length > 0
                ? services
                : <Typography variant={"h6"} color={"error"}>Нет услуг</Typography>}
            <AddNewService
                addService={props.addService}
                idDirection={props.idDirection}
                tariffId={props.tariffId}
            />
        </div>

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
            changeServiceInfo={props.changeServiceInfo}
            idNumbers={idNumbers}
        />
    </div>
};

export default ProjectEditing
