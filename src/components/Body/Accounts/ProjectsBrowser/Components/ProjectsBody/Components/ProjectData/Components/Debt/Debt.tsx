import React, {FC} from "react";
import style from "./Debt.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import PaymentIcon from '@material-ui/icons/Payment';
import {Typography} from "@material-ui/core";
import {DebtProps} from "./Debt.types";

export let Debt:FC<DebtProps> = (props) => {
    if(!props.isExists) return null;

    return <section className={style.Debt}>
        <TitleComponent titleIcon={<PaymentIcon />} titleText={'Сумма долга'}/>
        <div className={style.debtContainer}>
            <Typography component={'div'} color={"error"} className={style.numberDebt}>{props.amountDebt} р.</Typography>
            <Typography component={'div'} className={style.debtPercentage}>
                Процент от общей стоимости проекта: {props.debtPercentage}%
            </Typography>
        </div>
    </section>
};

