import React from "react";
import style from "./Destinations.module.scss"
import {DestinationsDisplay} from "./Components/ChipsDisplay/DestinationsDisplay";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getDestinationsSelector} from "../../../../../../../../../../../../../Redux/Reducers/Instructions/Instructions.selectors";

export const Destinations = () => {
    const destinations = useSelector(getDestinationsSelector);

    return <div className={style.Destinations}>
        <Typography className={style.destinationsTitle}>Выберите получателя инструкции</Typography>
        <DestinationsDisplay destinations={destinations}/>
    </div>
};

