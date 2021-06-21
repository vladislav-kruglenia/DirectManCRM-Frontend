import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {NotificationContentBodyProps} from "./NotificationContentBody.types";

export const NotificationContentBody:FC<NotificationContentBodyProps> = (props) => {
    const {notificationText} = props;

    return <div>
        <Typography variant={"body2"}>{notificationText}</Typography>
    </div>
};