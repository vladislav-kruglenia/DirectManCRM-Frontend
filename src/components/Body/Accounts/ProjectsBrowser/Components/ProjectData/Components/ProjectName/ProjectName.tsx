import style from "./ProjectName.module.scss";
import React from "react";
import {Typography} from "@material-ui/core";


export let ProjectName = () => {
    return <div className={style.ProjectName}>
        <Typography component={'h4'} variant={"h5"}>Опт2020.рф - контекст стандарт</Typography>
    </div>
};

