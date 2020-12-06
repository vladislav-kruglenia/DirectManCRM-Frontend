import React from 'react';

export let DisplayingDifferentData = (props)=>{
    return <div>
        {props.displayType === "price" && <div>{props.value} р.</div>}
        {props.displayType === "number" && <div>{props.value}</div>}
        {props.displayType === "text" && <div>{props.value}</div>}
        {props.displayType === "component" && <>{props.displayComponent}</>}
    </div>
};

