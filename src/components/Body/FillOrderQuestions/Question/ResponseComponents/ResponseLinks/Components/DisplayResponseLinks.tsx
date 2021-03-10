import React, {FC} from "react";
import {DisplayResponseLinksPropsType} from "../../Types/ResponseLinksTypes";
import style from "../ResponseLinks.module.scss";
import {
    DeleteButton,
    EditButton
} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";

export let DisplayResponseLinks: FC<DisplayResponseLinksPropsType> = (props) => {
    const displayButtons = !props.displayOnly
        ?  <span className={style.helperButtons}>
                <EditButton
                    onClickFunc={(() => props.setEditMode(true))}
                    iconSize={"small"}
                    size={'small'}
                />
                <DeleteButton
                    onClickFunc={(() => props.deleteLinkData(props.indexQuestion, props.indexLink))}
                    iconSize={"small"}
                    size={'small'}
                />
        </span>
        : null;

    return <div className={style.productName}>
        <span>{`${props.indexLink + 1}. `}</span>
        <a
            rel={"noopener noreferrer"}
            target={"_blank"}
            href={props.linkData.productLink}>
            {props.linkData.productName}
        </a>
        {displayButtons}
    </div>
};