import React, {FC} from "react";
import style from "../../ProjectEditing.module.css";
import {AddTariffPropsType, PaymentPropsType, TotalPricePropsType} from "../Types/DirectionEditingTypes";

export let PaymentType: FC<PaymentPropsType> = (props) => {
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
export let TotalPrice: FC<TotalPricePropsType> = (props) => {
    return <div>
        {
            !props.paymentInFull
            &&
            <div>
                Промежуточная цена:
                {props.directionTotalPrice !== undefined ? props.directionTotalPrice / 2 : 0} р.
            </div>
        }
        <div>Итоговая цена: {`${props.directionTotalPrice} р.`}</div>
    </div>
};

export let AddTariff: FC<AddTariffPropsType> = (props) => {
    return <div>
        <button onClick={() => props.addTariff(props.idDirection)}>Добавить тариф</button>
    </div>
};

