import React, {FC} from 'react';
import {DisplayingDifferentDataPropsType, DisplayTypeEnum} from "./Types/DisplayingDifferentDataTypes";

export let DisplayingDifferentData: FC<DisplayingDifferentDataPropsType> = (props)=>{
    return <>
        {props.displayType === DisplayTypeEnum.price && <div>{props.value} р.</div>}
        {props.displayType === DisplayTypeEnum.number && <div>{props.value}</div>}
        {props.displayType === DisplayTypeEnum.text && <div>{props.value}</div>}
        {props.displayType === DisplayTypeEnum.component && <>{props.displayComponent}</>}
    </>
};

