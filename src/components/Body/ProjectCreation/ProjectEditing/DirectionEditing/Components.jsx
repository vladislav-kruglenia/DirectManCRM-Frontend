import React from "react";
import style from "../ProjectEditing.module.css";

export let PaymentType = (props) => {
    return <div>
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
};
export let TotalPrice = (props) => {
    return <div>
        {!props.paymentInFull && <div>Промежуточная цена: {props.directionTotalPrice / 2} р.</div>}
        <div>Итоговая цена: {`${props.directionTotalPrice} р.`}</div>
    </div>
};

export let AddTariff = (props) => {
    return <div>
        <button onClick={() => props.addTariff(props.idDirection)}>Добавить тариф</button>
    </div>
};

