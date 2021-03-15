import style from "./ProjectName.module.scss";
import React, {FC, useState} from "react";
import {Typography} from "@material-ui/core";
import {CopyButton} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {SnackbarContainer} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Snackbars/Snackbars";
import {ProjectNameTypeProps} from "./ProjectName.types";


export let ProjectName:FC<ProjectNameTypeProps> = (props) => {
    const [isOpenSnackBar, updateSnackBarStatus] = useState(false);

    return <section className={style.ProjectName}>
        <Typography
            className={style.projectNameText}
            component={'div'}
            variant={"h5"}
        >
            {props.projectName}
        </Typography>
        <div className={style.CopyButtonContainer}>
            <CopyButton
                copyText={props.projectName}
                onClickFunc={() => updateSnackBarStatus(true)}
                size={"small"}
            />
        </div>
        <SnackbarContainer
            textInfo={'Название проекта скопировано'}
            snackbarType={"success"}
            isOpenSnackBar={isOpenSnackBar}
            onCloseSnackBar={() => updateSnackBarStatus(false)}
        />
    </section>
};

