import React from "react";
import style from "./Errors.module.scss"
import {ErrorComponent} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Error/ErrorComponent";

export let NoQuestionsError = () => {
    return <><ErrorComponent variant={"h5"}>Нет вопросов для отображения</ErrorComponent></>
};

export let NoResponsesError = () => {
    return <div className={style.NoResponsesError} ><ErrorComponent variant={"h6"}>Тип ответа не выбран</ErrorComponent></div>
};

export let NoAccessesError = () => {
    return <div className={style.NoAccessesError} ><ErrorComponent variant={"h6"}>Нет выбранных доступов</ErrorComponent></div>
};

