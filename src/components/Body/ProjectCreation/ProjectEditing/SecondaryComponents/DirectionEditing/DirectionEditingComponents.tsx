import React, {FC} from "react";
import style from "./DirectionEditing.module.scss";
import {
    AddTariffPropsType,
    DisplayTotalPricePropsType,
    PaymentPropsType,
    TotalPricePropsType
} from "../Types/DirectionEditingTypes";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


export let DisplayTotalPrice: FC<DisplayTotalPricePropsType> = (props) => {
    return <div className={style.DisplayTotalPrice}>
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
};

export let PaymentType: FC<PaymentPropsType> = (props) => {
    return <div className={style.PaymentType}>
        <div className={style.descriptionPaymentType}>Тип оплаты:</div>
        <div className={style.buttonsContainer}>
            <div className={style.buttonContainer}>
                <Button size={"large"} href={''} variant={props.paymentInFull ? "outlined" : "text"} color="primary" onClick={() => {
                    props.changePaymentInFull(props.idDirection, true)
                }}>
                    100%
                </Button>
            </div>
            <div className={style.buttonContainer}>
                <Button size={"large"} href={''} variant={props.paymentInFull ? "text" : "outlined"} color="primary"
                        onClick={() => {
                            props.changePaymentInFull(props.idDirection, false)
                        }}>
                    50%
                </Button>
            </div>
        </div>
    </div>
};
export let TotalPrice: FC<TotalPricePropsType> = (props) => {
    return <div className={style.TotalPrice}>
        <div className={style.priceWrapper}>
            <div className={style.descriptionTotalPrice}>Итоговая цена:</div>
            <Typography component={'p'} variant={"h3"}>{`${props.directionTotalPrice} р.`}</Typography>
        </div>

        {
            !props.paymentInFull
            &&
            <div className={style.priceWrapper}>
                <div className={style.descriptionTotalPrice}>Промежуточная цена:</div>
                <Typography component={'p'} variant={"h5"}>
                    {props.directionTotalPrice !== undefined ? props.directionTotalPrice / 2 : 0} р.
                </Typography>
            </div>
        }
    </div>
};

export let AddTariff: FC<AddTariffPropsType> = (props) => {
    return <div className={style.AddTariff}>
        <Button className={style.buttonAddTariff} href={''} variant={"text"} onClick={() => props.addTariff(props.idDirection)}>
            <PlaylistAddIcon color={"action"}/>
            Добавить тариф
        </Button>
    </div>
};

