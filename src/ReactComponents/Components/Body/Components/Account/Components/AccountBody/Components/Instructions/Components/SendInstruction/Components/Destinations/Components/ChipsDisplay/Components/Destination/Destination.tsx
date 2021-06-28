import React, {FC, memo} from "react";
import style from "./Destination.module.scss"
import {Avatar, Chip} from "@material-ui/core";
import {DestinationProps} from "./Destination.types";

export const Destination:FC<DestinationProps> = (props) => {
    const {label, onDeleteFunc, index} = props;
    const avatarLetter = label[0];

    return <div className={style.Destination}>
        <Chip
            variant={"outlined"}
            size={"small"}
            color={"primary"}
            label={label}
            avatar={<Avatar>{avatarLetter}</Avatar>}
            onDelete={() => onDeleteFunc(index)}
        />
    </div>
};

export const DestinationMemo = memo(Destination);