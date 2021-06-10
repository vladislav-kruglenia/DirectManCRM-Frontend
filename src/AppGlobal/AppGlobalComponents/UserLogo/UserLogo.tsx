import React, {FC} from "react";
import style from "./UserLogo.module.scss"

import user from "../../../Img/User1.jpg";
import {UserLogoProps} from "./UserLogo.types";
import {useLogoSizeStyle} from "./UserLogo.hooks";

export const UserLogo:FC<UserLogoProps> = (props) => {
    const {variant} = props;
    const logoSizeStyle = useLogoSizeStyle(variant);

    return <div className={style.UserLogo}>
        <div className={logoSizeStyle}>
            <img src={user} alt=""/>
        </div>
    </div>
};
