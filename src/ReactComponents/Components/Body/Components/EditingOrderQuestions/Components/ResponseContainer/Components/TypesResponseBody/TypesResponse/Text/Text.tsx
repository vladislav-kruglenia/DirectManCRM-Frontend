import style from "../../../../../../EditingOrderQuestions.module.scss";
import React from "react";
import styleTypesResponseBody from "../../TypesResponseBody.module.scss";
import {Typography} from "@material-ui/core";

export let Text = () => {
    return <div className={style.Text}>
        <Typography variant={"body2"} className={styleTypesResponseBody.TypesResponseBodyTitle}>
            В брифе будет отображаться простая форма с текстом.
            Текст можно будет вводить с возможностью переноса на новую строку,
            как в обычном текстовом документе.
        </Typography>
    </div>
};