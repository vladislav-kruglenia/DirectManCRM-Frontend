import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let DisplayTariffName = (props) => {
    let editModeStatus = props.tariffName === null;
    return <div>
        <ValueDisplay
            editModeStatus={editModeStatus}
            valueGlobal={props.tariffName}
            changeValueGlobal={props.changeTariffName}
            idNumbers={props.idNumbers}
            displayType={"text"}
            type={"text"}
        />
    </div>
};

export let DeleteTariff = (props) => {
    return <div>
        <button onClick={() => {
            props.changeTariffStatus(false, props.tariffId, props.idDirection)
        }}>
            Убрать тариф
        </button>
    </div>
};

export let PaymentMethod = (props) => {
    return <div onClick={() => {
        props.changePaymentPackage(!props.paymentPackage, props.tariffId, props.idDirection)
    }}>
        Способ оплаты:
        {props.paymentPackage ? ' Пакет' : ' Сумма стоимости услуг'}
    </div>
};

export let DisplayTariffPrice = (props) => {
    return <div>
        Цена тарифа: {props.paymentPackage
        ? <ValueDisplay
            valueGlobal={props.totalPriceTariff}
            changeValueGlobal={props.changePacketPrice}
            idNumbers={props.idNumbers}
            displayType={"price"}
            type={"number"}
        />
        : `${props.totalPriceTariff} р.`}
    </div>
};

export let DisplayDeadlineTariff = (props) => {
    return <div>
        Количество дней на настройку:
        <ValueDisplay
            valueGlobal={props.deadlineTariff}
            changeValueGlobal={props.changeDeadlineTariff}
            idNumbers={props.idNumbers}
            displayType={"number"}
            type={"number"}
        />
    </div>
};
export let AddNewService = (props) => {
    return <div>
        <button onClick={() => props.addService(props.idDirection, props.tariffId)}>
            Добавить услугу
        </button>
    </div>
};




