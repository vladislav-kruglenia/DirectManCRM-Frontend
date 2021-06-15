import React, {useMemo} from "react";
import style from "./ProjectMenu.module.scss"
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {IconMenu} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Menu/IconMenu/IconMenu";
import {MenuItem} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Menu/IconMenu/IconMenu.types";


export const ProjectMenu = () => {
    const menuItemsArr = useMemo<MenuItem[]>(() => [
        {text: "Закрыть проект", icon: <DoneAllIcon color={"primary"}/>, onClickFunc: () => {alert('Закрыть проект')},}
    ], []);

    return <div className={style.ProjectMenu}>
        <IconMenu menuItemsArr={menuItemsArr}/>
    </div>
};