import React, {FC} from "react";
import ValueDisplay from "../../DisplayingDifferentData/InputEditMode";
import {
    AddNewServicePropsType,
    DeleteTariffPropsType,
    DisplayDeadlineTariffPropsType,
    DisplayTariffNamePropsType,
    DisplayTariffPricePropsType,
    PaymentMethodPropsType
} from "../Types/TariffEditingTypes";
import {FormTypeEnum} from "../../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export let DisplayTariffName: FC<DisplayTariffNamePropsType> = (props) => {
    let editModeStatus = props.tariffName === null;
    return <div>
        <ValueDisplay
            editModeStatus={editModeStatus}
            valueGlobal={props.tariffName}
            changeValueGlobal={props.changeTariffName}
            idNumbers={props.idNumbers}
            displayType={DisplayTypeEnum.text}
            type={FormTypeEnum.text}
        />
    </div>
};

export let DeleteTariff: FC<DeleteTariffPropsType> = (props) => {
    return <div>
        <button onClick={() => {
            props.changeTariffStatus(false, props.tariffId, props.idDirection)
        }}>
            Убрать тариф
        </button>
    </div>
};

export let PaymentMethod: FC<PaymentMethodPropsType> = (props) => {
    return <div onClick={() => {
        props.changePaymentPackage(!props.paymentPackage, props.tariffId, props.idDirection)
    }}>
        Способ оплаты:
        {props.paymentPackage ? ' Пакет' : ' Сумма стоимости услуг'}
    </div>
};

export let DisplayTariffPrice: FC<DisplayTariffPricePropsType> = (props) => {
    return <div>
        Цена тарифа: {props.paymentPackage
        ? <ValueDisplay
            valueGlobal={props.totalPriceTariff}
            changeValueGlobal={props.changePacketPrice}
            idNumbers={props.idNumbers}
            displayType={DisplayTypeEnum.price}
            type={FormTypeEnum.number}
            editModeStatus={false}
        />
        : `${props.totalPriceTariff} р.`}
    </div>
};

export let DisplayDeadlineTariff: FC<DisplayDeadlineTariffPropsType> = (props) => {
    return <div>
        Количество дней на настройку:
        <ValueDisplay
            valueGlobal={props.deadlineTariff}
            changeValueGlobal={props.changeDeadlineTariff}
            idNumbers={props.idNumbers}
            displayType={DisplayTypeEnum.number}
            type={FormTypeEnum.number}
            editModeStatus={false}
        />
    </div>
};
export let AddNewService: FC<AddNewServicePropsType> = (props) => {
    return <div>
        <button onClick={() => props.addService(props.idDirection, props.tariffId)}>
            Добавить услугу
        </button>
    </div>
};




