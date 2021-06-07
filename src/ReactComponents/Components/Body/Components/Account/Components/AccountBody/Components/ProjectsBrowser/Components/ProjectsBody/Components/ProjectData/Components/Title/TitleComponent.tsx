import React, {FC} from 'react'
import style from './Title.module.scss'
import {TitleProps} from "./Types/Title.types";
import {Typography} from "@material-ui/core";

export let TitleComponent: FC<TitleProps> = (props) => {
    return <div className={style.Title}>
        <div className={style.titleIcon}>{props.titleIcon}</div>
        <Typography className={style.titleText} component={'div'}>{props.titleText}</Typography>
    </div>
};
