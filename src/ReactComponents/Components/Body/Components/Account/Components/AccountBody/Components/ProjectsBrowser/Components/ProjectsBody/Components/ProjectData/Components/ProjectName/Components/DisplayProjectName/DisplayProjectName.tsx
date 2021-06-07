import React, {FC, useState} from "react";
import style from "../../ProjectName.module.scss";
import {Typography} from "@material-ui/core";
import {CopyButton} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {SnackbarContainer} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Snackbars/Snackbars";
import {DisplayProjectNameProps} from "./DisplayProjectName.types";

export const DisplayProjectName:FC<DisplayProjectNameProps> = (props) => {
    const {projectName} = props;
    const [isOpenSnackBar, updateSnackBarStatus] = useState(false);

    return <section className={style.ProjectName}>
        <Typography
            className={style.projectNameText}
            component={'div'}
            variant={"h5"}
        >
            {projectName}
            <div className={style.CopyButtonContainer}>
                <CopyButton
                    copyText={projectName}
                    onClickFunc={() => updateSnackBarStatus(true)}
                    size={"small"}
                />
            </div>
        </Typography>

        <SnackbarContainer
            textInfo={'Название проекта скопировано'}
            snackbarType={"success"}
            isOpenSnackBar={isOpenSnackBar}
            onCloseSnackBar={() => updateSnackBarStatus(false)}
        />
    </section>
};