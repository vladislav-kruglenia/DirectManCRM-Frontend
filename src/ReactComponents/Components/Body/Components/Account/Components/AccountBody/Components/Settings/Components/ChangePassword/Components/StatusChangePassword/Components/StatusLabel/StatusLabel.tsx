import {Typography} from "@material-ui/core";
import style from "../../StatusChangePassword.module.scss";
import React, {FC} from "react";
import {StatusLabelProps} from "./StatusLabel.types";

export const StatusLabel: FC<StatusLabelProps> = (props) => {
    if(props.status === "none") return null;

    const statusLabel = props.status === "successful"
        ? <SuccessfulStatus/>
        : <ErrorStatus/>;

    return <div>
        {statusLabel}
    </div>
};

export const ErrorStatus = () => {
    return <Typography color={"error"}>Ошибка сохранения пароля</Typography>
};
export const SuccessfulStatus = () => {
    return <Typography className={style.successful}>Пароль изменен</Typography>
};