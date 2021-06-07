import React, {FC} from "react";
import style from "./TypesResponseBody.module.scss";
import {Links} from "./TypesResponse/Links/Links";
import {Contacts} from "./TypesResponse/Contacts/Contacts";
import {Text} from "./TypesResponse/Text/Text";
import {Accesses} from "./TypesResponse/Accesses/Accesses";
import {TypesResponseBodyProps} from "./Types/TypesResponseBodyTypes";
import {AssessesTypeResponse} from "../../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";
import {NoResponsesError} from "../../../Errors/Errors";
import {ErrorComponent} from "../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Error/ErrorComponent";

export let TypesResponseBody: FC<TypesResponseBodyProps> = (props) => {
    let typeResponse;
    switch (props.responseParams.type) {
        case "Accesses":{
            let response = props.responseParams as AssessesTypeResponse;
            typeResponse = <Accesses indexQuestion={props.indexQuestion} assessesData={response.assesses}/>;
            break
        }
        case "Links":{
            typeResponse = <Links indexQuestion={props.indexQuestion} numberLinks={props.responseParams.numberLinks}/>;
            break
        }
        case "Text":{
            typeResponse = <Text/>;
            break
        }
        case "Contacts":{
            typeResponse = <Contacts/>;
            break
        }
        case "None":{
            typeResponse = <NoResponsesError/>;
            break
        }
        default:{
            typeResponse = <ErrorComponent variant={"h5"}>Ошибка клиента</ErrorComponent>
        }

    }
    return <div className={style.TypesResponseBody}>
        {typeResponse}
    </div>
};
