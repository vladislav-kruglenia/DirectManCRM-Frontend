import React, {FC} from "react";
import style from "./TypesResponseBody.module.scss";
import {Links} from "./TypesResponse/Links/Links";
import {Contacts} from "./TypesResponse/Contacts/Contacts";
import {Text} from "./TypesResponse/Text/Text";
import {Accesses} from "./TypesResponse/Accesses/Accesses";
import {TypesResponseBodyProps} from "./Types/TypesResponseBodyTypes";

export let TypesResponseBody: FC<TypesResponseBodyProps> = (props) => {
    let typeResponse;
    switch (props.typeResponse) {
        case "Accesses":{
            typeResponse = <Accesses/>;
            break
        }
        case "Links":{
            typeResponse = <Links/>;
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
        default:{
            typeResponse = <div>Ошибка клиента</div> //TODO: Сделать компоненту с ошибкой
        }
    }
    return <div className={style.TypesResponseBody}>
        {typeResponse}
    </div>
};
