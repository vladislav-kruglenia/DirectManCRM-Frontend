import React, {FC} from "react";
import style from "./Style/QuestionText.module.scss";
import {Typography} from "@material-ui/core";
import {
    DeleteButton,
    EditButton
} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {DisplayQuestionTextProps, EditAndDeleteQuestionTextProps} from "./Types/QuestionTextTypes";

export let DisplayQuestionText: FC<DisplayQuestionTextProps> = (props) => {
    return <div className={style.DisplayQuestionText}>
        <Typography
            variant={'h5'}
            className={style.text}>
            1. Доступы к аккаунтам, где нужно настроить рекламу? Или создаем новые?
        </Typography>
        <EditAndDeleteQuestionText enableEditMode={() => props.enableEditMode()}/>
    </div>
};

export let EditAndDeleteQuestionText: FC<EditAndDeleteQuestionTextProps> = (props) => {
    return <div className={style.EditAndDeleteQuestionText}>
        <EditButton
            onClickFunc={() => props.enableEditMode()}
            size={"medium"}
        />
        <DeleteButton
            onClickFunc={() => {
            }}
            size={"medium"}
        />
    </div>
};