import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {NotificationDateProps} from "./NotificationDate.types";

export const NotificationDate:FC<NotificationDateProps> = (props) => {
    const {dateNotification} = props;

    return <Typography variant={"caption"}>{dateNotification}</Typography>
};