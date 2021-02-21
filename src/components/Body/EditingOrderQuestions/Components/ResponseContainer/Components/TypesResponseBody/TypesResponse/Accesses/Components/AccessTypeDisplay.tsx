import style from "../Accesses.module.scss";
import React, {FC} from "react";
import {SelectingAccessType} from "./SelectingAccessType";
import {
    DeleteButton,
    EditButton,
    LinkButton
} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AccessButtonsProps, AccessTypeDisplayProps} from "../Types/AccesseTypeDisplayTypes";

export let AccessTypeDisplay:FC<AccessTypeDisplayProps> = (props) => {
    return <div className={style.AccessTypeDisplay}>
        <SelectingAccessType
            accessData={props.accessData}
            accessTypesArr={props.accessTypesArr}
            editAccessType={idAccess => props.editAccessType(idAccess)}
        />
        <AccessButtons
            accessData={props.accessData}
            openEditMode={() => props.openEditMode()}
            deleteAccess={() => props.deleteAccess()}
        />
    </div>
};

export let AccessButtons:FC<AccessButtonsProps> = (props) => {
    return <div className={style.EditAndDeleteButtons}>
        <LinkButton
            link={props.accessData.accessLink}
            size={'small'}
            iconSize={"default"}
        />
        <EditButton
            size={'small'}
            iconSize={"default"}
            onClickFunc={() => props.openEditMode()}
        />
        <DeleteButton
            size={"small"}
            iconSize={"default"}
            onClickFunc={() => props.deleteAccess()}
        />
    </div>
};
