import React, {FC, ReactNode, useEffect, useState} from "react";
import {Breadcrumbs, Paper, Typography} from "@material-ui/core";
import style from "../../ClientAccountBody.module.scss";
import {BreadcrumbsComponentProps} from "./Types/Breadcrumbs.types";

export let BreadcrumbsComponent: FC<BreadcrumbsComponentProps> = (props) => {
    const [thirdPoint, updateThirdPoint] = useState<ReactNode | null>(null);

    // Если индекс главной ссылки - Проекты, то выводим имя текущего проекта
    useEffect(() => {
        const thirdPoint = props.indexMainLink === 0 && props.currentProjectName
            ? <Typography color="textPrimary">{props.currentProjectName}</Typography>
            : null;
        updateThirdPoint(thirdPoint)
    },[props.indexMainLink, props.currentProjectName]);


    return <Paper className={style.Breadcrumbs}>
        <Breadcrumbs maxItems={3} aria-label="breadcrumb">
            <Typography color="inherit">
                Личный кабинет
            </Typography>
            <Typography color={thirdPoint ? 'inherit' : "textPrimary"}>
                {props.linkData.linkName}
            </Typography>
            {thirdPoint}
        </Breadcrumbs>
    </Paper>
};