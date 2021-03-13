import React from "react";
import style from "./Debt.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import PaymentIcon from '@material-ui/icons/Payment';

export let Debt = () => {
    return <div className={style.ProjectName}>
        <TitleComponent titleIcon={<PaymentIcon />} titleText={'Сумма долга'}/>
        <div className={style.NumberDebt}>Долг: 1240 р.</div>
        <div className={style.DebtPercentage}>Процент от общей стоимости: 40%</div>
    </div>
};

