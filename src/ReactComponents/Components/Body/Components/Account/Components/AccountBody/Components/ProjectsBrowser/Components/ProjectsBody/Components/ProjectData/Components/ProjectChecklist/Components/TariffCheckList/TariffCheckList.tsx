import React, {FC} from "react";
import style from "./TariffCheckList.module.scss";
import {Typography} from "@material-ui/core";
import {LinearProgressComponent} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/LinearProgress/LinearProgress";
import {CheckList} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/CheckList/CheckList";
import {TariffCheckListProps} from "./TariffCheckList.types";
import {useChecklistItems} from "./TariffCheckList.hooks";

export const TariffCheckList: FC<TariffCheckListProps> = (props) => {
    const {tariffName, servicesArr} = props;
    const checklistItems = useChecklistItems(servicesArr);

    return <div className={style.TariffCheckList}>
        <Typography component={'div'} className={style.tariffName}>{tariffName}</Typography>
        <LinearProgressComponent checklistItems={checklistItems}/>
        <CheckList checklistItems={checklistItems}/>
    </div>
};