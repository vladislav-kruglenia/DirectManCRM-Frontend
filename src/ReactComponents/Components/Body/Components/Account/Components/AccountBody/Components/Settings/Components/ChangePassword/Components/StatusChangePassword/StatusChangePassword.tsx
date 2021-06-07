import React, {FC} from "react";
import {StatusLabel} from "./Components/StatusLabel/StatusLabel";
import {StatusChangePasswordProps} from "./StatusChangePassword.types";
import {StatusChangePasswordEnum} from "./Components/StatusLabel/StatusLabel.types";
import {OutlinedButton} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";

export const StatusChangePassword :FC<StatusChangePasswordProps> = (props) => {
    /*const {apolloProps} = props;
    const {data, loading, error} = apolloProps;*/

    let status = StatusChangePasswordEnum.none;
    /*if(data) status = StatusChangePasswordEnum.successful;
    if(error) status = StatusChangePasswordEnum.error;*/

    return <div>
        <StatusLabel status={status}/>
        <OutlinedButton
            buttonText={"Изменить пароль"}
            onClickFunc={() => props.enterEditMode()}
        />
    </div>
};




