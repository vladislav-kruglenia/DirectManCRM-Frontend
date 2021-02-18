import style from "../Accesses.module.scss";
import React, {FC} from "react";
import {SelectingAccessType} from "./SelectingAccessType";
import {
    DeleteButton,
    EditButton, LinkButton
} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AdvertisingLinks} from "../../../../../../../../../../AppGlobal/AppGlobalTypes/InternetLinks";
import {AccessButtonsProps, AccessTypeDisplayProps} from "../Types/AccesseTypeDisplay";

export let AccessTypeDisplay:FC<AccessTypeDisplayProps> = (props) => {
    return <div className={style.AccessTypeDisplay}>
        <SelectingAccessType/>
        <AccessButtons openEditMode={() => props.openEditMode()}/>
    </div>
};

export let AccessButtons:FC<AccessButtonsProps> = (props) => {
    return <div className={style.EditAndDeleteButtons}>
        <LinkButton
            link={AdvertisingLinks.direct}
            size={'small'}
            iconSize={"default"}
        />
        <EditButton
            onClickFunc={() => props.openEditMode()}
            size={'small'}
            iconSize={"default"}
        />
        <DeleteButton
            onClickFunc={() => {
            }}
            size={"small"}
            iconSize={"default"}
        />
    </div>
};
