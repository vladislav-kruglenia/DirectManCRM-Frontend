import React, {FC} from "react";
import style from "./CommentContainer.module.scss"
import {UserLogo} from "../../../../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/UserLogo/UserLogo";
import {UserLogoVariant} from "../../../../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/UserLogo/UserLogo.types";
import {CommentContainerProps} from "./CommentContainer.types";

export const CommentContainer:FC<CommentContainerProps> = (props) => {
    const {DisplayComponent} = props;

    return <div className={style.CommentContainer}>
        <div className={style.logo}>
            <UserLogo variant={UserLogoVariant.small}/>
        </div>
        <div className={style.displayComponent}>{DisplayComponent}</div>
    </div>
};