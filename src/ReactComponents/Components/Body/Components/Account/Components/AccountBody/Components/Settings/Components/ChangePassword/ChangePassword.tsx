import React, {useState} from "react";
import style from "./ChangePassword.module.scss"
import {ChangePasswordForm} from "./Components/ChangePasswordForm/ChangePasswordForm";
import {Divider, Paper, Typography} from "@material-ui/core";
import {StatusChangePassword} from "./Components/StatusChangePassword/StatusChangePassword";

export const ChangePassword = () => {
    const [editMode, setEditMode] = useState(false);


    const componentDisplay = editMode
        ? <ChangePasswordForm
            exitEditMode={()=>setEditMode(false)}
        />
        : <StatusChangePassword
            enterEditMode={()=>setEditMode(true)}
        />;

    return <Paper className={style.ChangePassword}>
        <Typography variant={'h4'} style={{fontWeight: "bold"}}>Изменение пароля</Typography>
        <Divider/>
        <div className={style.changePasswordWrapper}>
            {componentDisplay}
        </div>
    </Paper>
};

