import React from "react";
import style from "./Destinations.module.scss"
import {DestinationsDisplay} from "./Components/ChipsDisplay/DestinationsDisplay";
import {useSelector} from "react-redux";
import {getDestinationsSelector} from "../../../../../../../../../../../../../Redux/Reducers/Instructions/Instructions.selectors";
import {SendInstructionTitle} from "../SendInstructionTitle/SendInstructionTitle";
import SendIcon from '@material-ui/icons/Send';

export const Destinations = () => {
    const destinations = useSelector(getDestinationsSelector);

    return <div className={style.Destinations}>
        <SendInstructionTitle titleText={"Выберите получателя инструкции"} titleIcon={<SendIcon color={"primary"}/>}/>
        <DestinationsDisplay destinations={destinations}/>
    </div>
};


