import React, {FC} from "react";
import style from "./ResponseContainer.module.scss";
import {SelectingTypeResponse} from "./Components/SelectingTypeResponse/SelectingTypeResponse";
import {TypesResponseBody} from "./Components/TypesResponseBody/TypesResponseBody";
import {ResponseContainerProps} from "./Types/ResponseContainerTypes";

export let ResponseContainer:FC<ResponseContainerProps> = (props) => {
    return <div className={style.ResponseContainer}>
        <SelectingTypeResponse/>
        <TypesResponseBody typeResponse={props.typeResponse}/>
    </div>
};
