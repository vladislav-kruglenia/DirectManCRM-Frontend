import React, {FC} from "react";
import style from "./ErrorsComponents.module.scss"
import {Typography} from "@material-ui/core";

export let NoContacts: FC = () => {
    return <div className={style.NoContacts}>
        <Typography variant={'h6'} color={'error'} component={'div'}>
            Контактов нет
        </Typography>
    </div>
};