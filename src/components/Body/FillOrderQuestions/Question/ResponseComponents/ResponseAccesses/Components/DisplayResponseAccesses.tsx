import React, {FC, useState} from "react";
import {DisplayResponseAccessesPropsType} from "../../Types/ResponseAccessesTypes";
import style from "../ResponseAccesses.module.scss";
import {CopyButton} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {
    SnackbarContainer
} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Snackbars/Snackbars";

export let DisplayResponseAccesses: FC<DisplayResponseAccessesPropsType> = (props) => {
    let [isOpenSnackBar, onOpenSnackBar] = useState(false);

    return <div className={style.DisplayResponseAccesses}>
        <div className={style.accessTypeContainer}>
            <div className={style.accessTypeName}>Логин:</div>
            <div className={style.login}>{props.login}</div>
            <div className={style.copyButton}>
                <CopyButton
                    onClickFunc={() => {
                        onOpenSnackBar(true)
                    }}
                    copyText={props.login}
                    iconSize={'small'}
                    size={'small'}
                />
            </div>
        </div>
        <div className={style.accessTypeContainer}>
            <div className={style.accessTypeName}>Пароль:</div>
            <div className={style.password}>{props.password}</div>
            <div className={style.copyButton}>
                <CopyButton
                    onClickFunc={() => {
                        onOpenSnackBar(true)
                    }}
                    copyText={props.password}
                    iconSize={'small'}
                    size={'small'}
                />
            </div>
        </div>
        <SnackbarContainer
            isOpenSnackBar={isOpenSnackBar}
            onCloseSnackBar={()=>onOpenSnackBar(false)}
            snackbarType={"success"}
            textInfo={'Текст скопирован'}
        />
    </div>
};