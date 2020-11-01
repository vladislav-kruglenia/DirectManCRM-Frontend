import React from 'react';
import style from './ProjectEditing.module.css'
import ValueDisplay from "./DisplayingDifferentData/InputEditMode";


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        // values
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        directionTotalPrice={d.directionTotalPrice}
        paymentInFull={d.paymentInFull}

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
        <button>Оформить заказ</button>
    </div>
};

let DirectionEditing = (props) => {
    let tariffs = props.namesTariffs.map(t => <TariffEditing
        // values
        key={t.tariffId}
        idDirection={props.idDirection}
        namesServices={t.namesServices}
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
                <div>
                    Тип оплаты:
                    <div
                        className={`${props.paymentInFull && style.paymentInFull}`}
                        onClick={() => {props.changePaymentInFull(props.idDirection, true)}}
                    >
                        100%
                    </div>
                    <div
                        className={`${!props.paymentInFull && style.paymentInFull}`}
                        onClick={() => {props.changePaymentInFull(props.idDirection, false)}}
                    >
                        50%
                    </div>
                </div>
                <div>
                    {!props.paymentInFull && <div>Промежуточная цена: {props.directionTotalPrice / 2} р.</div>}
                    <div>Итоговая цена: {`${props.directionTotalPrice} р.`}</div>
                </div>
            </div>
            : <div>Нет выбранных тарифов</div>}

        <button onClick={() => props.addTariff(props.idDirection)}>Добавить тариф</button>
    </div>
};

let TariffEditing = (props) => {
    let services = props.namesServices.map(s => <ServiceEditing
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
        <ValueDisplay
            valueGlobal={props.tariffName}
            changeValueGlobal={props.changeTariffName}
            idNumbers={idNumbers}
            displayType={"text"}
            type={"text"}
        />
        <button onClick={() => {
            props.changeTariffStatus(false, props.tariffId, props.idDirection)
        }}>
            Убрать тариф
        </button>
        <h5>
            <div onClick={() => {
                props.changePaymentPackage(!props.paymentPackage, props.tariffId, props.idDirection)
            }}>
                Способ оплаты:
                {props.paymentPackage ? ' Пакет' : ' Сумма стоимости услуг'}
            </div>
            <div>
                Цена тарифа: {props.paymentPackage
                ? <ValueDisplay
                    valueGlobal={props.totalPriceTariff}
                    changeValueGlobal={props.changePacketPrice}
                    idNumbers={idNumbers}
                    displayType={"price"}
                    type={"number"}
                />
                : `${props.totalPriceTariff} р.`}
            </div>
            <div>
                Количество дней на настройку:
                <ValueDisplay
                    valueGlobal={props.deadlineTariff}
                    changeValueGlobal={props.changeDeadlineTariff}
                    idNumbers={idNumbers}
                    displayType={"number"}
                    type={"number"}
                />
            </div>
        </h5>
        {props.namesServices.length > 0
            ? services
            : <div>Нет услуг</div>}
        <button onClick={() => props.addService(props.idDirection, props.tariffId)}>
            Добавить услугу
        </button>
    </div>
};

let ServiceEditing = (props) => {
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId,
        idService: props.serviceId
    };
    return <div>
        <ValueDisplay
            valueGlobal={props.serviceName}
            changeValueGlobal={props.changeServiceName}
            idNumbers={idNumbers}
            displayType={"text"}
            type={"text"}
        />
        <div>
            <ValueDisplay
                valueGlobal={props.servicePrice}
                changeValueGlobal={props.changeServicePrice}
                idNumbers={idNumbers}
                displayType={"price"}
                type={"number"}
            />
            <button onClick={() => {
                props.deleteService(props.idDirection, props.tariffId, props.serviceId)
            }}>
                Удалить услугу
            </button>
        </div>
    </div>
};

export default ProjectEditing
