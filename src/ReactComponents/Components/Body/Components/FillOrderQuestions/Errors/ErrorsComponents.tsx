import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {AvailableLinksErrorProps} from "./Type/ErrorsComponentsTypes";


export let ErrorLoadingData = () => {
    return <Typography variant={"h6"} color={"error"}>Error 505: ошибка данных сервера</Typography>
};

export let NoAccessesError = () => {
    return <>
        <Typography variant={"h6"} color={"error"}>Нет доступов для отображения</Typography>
    </>
};

export let NoLinksError = () => {
    return <>
        <Typography variant={"h6"} color={"error"}>Нет ссылок</Typography>
    </>
};

export let AvailableLinksError: FC<AvailableLinksErrorProps> = (props) => {
    return <>
        <Typography variant={"h6"} color={"error"}>Вам доступно {props.numberLinks} ссылок</Typography>
    </>
};

