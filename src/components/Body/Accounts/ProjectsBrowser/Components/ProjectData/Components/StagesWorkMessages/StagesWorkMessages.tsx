import React from "react";
import style from "./StagesWorkMessages.module.scss";
import {TitleComponent} from "../Title/TitleComponent";
import ChatIcon from '@material-ui/icons/Chat';

export let StagesWorkMessages = () => {
    // Todo: нужно доделать компоненту StagesWorkMessages на этапе написния бизнес логики
    return <div className={style.ProjectName}>
        <TitleComponent titleIcon={<ChatIcon />} titleText={'Сообщения о этапах работы'}/>
    </div>
};

