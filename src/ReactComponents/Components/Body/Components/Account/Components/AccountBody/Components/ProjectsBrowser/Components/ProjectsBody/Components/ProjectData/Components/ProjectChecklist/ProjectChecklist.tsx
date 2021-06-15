import React, {FC} from "react";
import style from "./ProjectChecklist.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {ProjectChecklistProps} from "./ProjectChecklist.types";
import {TariffCheckList} from "./Components/TariffCheckList/TariffCheckList";

export const ProjectChecklist: FC<ProjectChecklistProps> = (props) => {
    const {services, tariffName} = props;

    return <section className={style.ProjectChecklist}>
        <TitleComponent titleIcon={<DoneAllIcon/>} titleText={'Заказанные услуги'}/>
        <TariffCheckList tariffName={tariffName} servicesArr={services}/>
    </section>
};





