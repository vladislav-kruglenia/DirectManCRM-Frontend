import React from 'react';
import style from './ProjectEditing.module.css'
import {AddTariff, PaymentType, TotalPrice} from "./DirectionEditing/Components";
import {
    AddNewService,
    DeleteTariff,
    DisplayDeadlineTariff,
    DisplayTariffName,
    DisplayTariffPrice,
    PaymentMethod
} from "./TariffEditing/Components";
import {DeleteService, DisplayServiceName, DisplayServicePrice} from "./ServiceEditing/Components";
import {NavLink} from "react-router-dom";


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        // values
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        directionTotalPrice={d.directionTotalPrice}
        paymentInFull={d.paymentInFull}
        typeComponent={d.typeComponent}

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
        <h2>Редактировать заказ</h2>
        {props.servicesAndNamesTariffs.length > 0
            ? directions
            : <div>Нет выбранных направлений</div>}
        <NavLink to={'/admin'}>
            {props.typeComponent === "projectCreation"
            && <button onClick={() => {
                props.saveOrderInfo(props.servicesAndNamesTariffs, props.nameProject, props.userId)
            }}>Оформить заказ</button>}

            {props.typeComponent === "editTariffsData" &&
            <button onClick={() => {
                props.editTariffsInfo(props.directionsAndTariffs)
            }}>Сохранить
            </button>
            }
        </NavLink>

    </div>
};

let DirectionEditing = (props) => {
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
        <h3>{props.nameDirection}</h3>
        {props.namesTariffs.length > 0
            ? <div>
                {tariffs}
                {props.typeComponent === "projectCreation" && <div>
                    <PaymentType
                        paymentInFull={props.paymentInFull}
                        changePaymentInFull={props.changePaymentInFull}
                        idDirection={props.idDirection}
                    />
                    <TotalPrice
                        paymentInFull={props.paymentInFull}
                        directionTotalPrice={props.directionTotalPrice}
                    />
                </div>
                }
            </div>
            : <div>Нет выбранных тарифов</div>}
        <AddTariff addTariff={props.addTariff} idDirection={props.idDirection}/>
    </div>
};

let TariffEditing = (props) => {
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
        />
        <DeleteTariff
            changeTariffStatus={props.changeTariffStatus}
            tariffId={props.tariffId}
            idDirection={props.idDirection}
        />
        <h5>
            <PaymentMethod
                changePaymentPackage={props.changePaymentPackage}
                paymentPackage={props.paymentPackage}
                tariffId={props.tariffId}
                idDirection={props.idDirection}
            />
            <DisplayTariffPrice
                paymentPackage={props.paymentPackage}
                totalPriceTariff={props.totalPriceTariff}
                changePacketPrice={props.changePacketPrice}
                idNumbers={idNumbers}
            />
            <DisplayDeadlineTariff
                deadlineTariff={props.deadlineTariff}
                changeDeadlineTariff={props.changeDeadlineTariff}
                idNumbers={idNumbers}
            />
        </h5>
        {props.services.length > 0
            ? services
            : <div>Нет услуг</div>}
        <AddNewService
            addService={props.addService}
            idDirection={props.idDirection}
            tariffId={props.tariffId}
        />
    </div>
};

let ServiceEditing = (props) => {
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId,
        idService: props.serviceId
    };
    return <div>
        <DisplayServiceName
            serviceName={props.serviceName}
            changeServiceName={props.changeServiceName}
            idNumbers={idNumbers}
        />
        <div>
            <DisplayServicePrice
                servicePrice={props.servicePrice}
                changeServicePrice={props.changeServicePrice}
                idNumbers={idNumbers}
            />
            <DeleteService
                deleteService={props.deleteService}
                idNumbers={idNumbers}
            />
        </div>
    </div>
};

export default ProjectEditing
