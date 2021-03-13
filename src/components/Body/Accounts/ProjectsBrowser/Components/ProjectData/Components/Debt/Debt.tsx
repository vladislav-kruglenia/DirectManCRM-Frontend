import style from "./Debt.module.scss";
import React from "react";

export let Debt = () => {
    return <div className={style.ProjectName}>
        <div className={style.NumberDebt}>Долг: 1240 р.</div>
        <div className={style.DebtPercentage}>Процент от общей стоимости: 40%</div>
    </div>
};

