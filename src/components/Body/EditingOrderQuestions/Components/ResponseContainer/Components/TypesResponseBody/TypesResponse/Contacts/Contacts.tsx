import style from "../../../../../../EditingOrderQuestions.module.scss";
import React from "react";
import styleTypesResponseBody from "../../TypesResponseBody.module.scss";
import {Typography} from "@material-ui/core";

export let Contacts = () => {
    return <div className={style.Contacts}>
        <Typography variant={"body2"} className={styleTypesResponseBody.TypesResponseBodyTitle}>
            В брифе клиент сможет оставить свои контакты в формате: Имя, Телефон, Почта.
        </Typography>
    </div>
};