import React, {useState} from "react";
import style from "./Accesses.module.scss"
import styleTypesResponseBody from "../../TypesResponseBody.module.scss"
import {AddButton} from "../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AccessTypeDisplay} from "./Components/AccessTypeDisplay";
import {AccessTypeForm} from "./Components/AccessTypeForm";
import {ValueDisplay} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {Typography} from "@material-ui/core";

export let Accesses = () => {
    return <div className={style.Accesses}>
        <Typography variant={"body2"} className={styleTypesResponseBody.TypesResponseBodyTitle}>
            В этом поле клиенту будут отображаться формы, для заполнения логина и пароля.
            Вам нужно указать название доступа и ссылку на него:
        </Typography>
        <Access/>
        <Access/>
        <Access/>

        <AddButton buttonText={"Добавить доступ"} size={"small"} iconSize={"small"} onClickFunc={() => {}}/>
    </div>
};
export let Access = () => {
    let [editMode, setEditMode] = useState(false);
    return <div className={style.Access}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={(value) => setEditMode(value)}
            displayComponent={<AccessTypeDisplay openEditMode={() => setEditMode(true)}/>}
            grandFormComponent={<AccessTypeForm accessLink={"vk.com"} accessName={"Вконтакте"}/>}
        />
    </div>
};

