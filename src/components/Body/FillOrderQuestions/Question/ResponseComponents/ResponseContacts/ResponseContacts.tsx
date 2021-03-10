import React, {FC} from "react";
import style from "./ResponseContacts.module.scss"
import {ResponseContactsPropsType} from "../Types/ResponseContactsTypes";
import {ContactContainer} from "../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/ContactContainer";
import {AddButtonText} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {NoContacts} from "../../../../../../AppGlobal/AppGlobalComponents/Errors/ErrorsComponents";


export let ResponseContacts: FC<ResponseContactsPropsType> = (props) => {
    let Contacts = !props.responseData.isNoData
        ? props.responseData.contactsData.map((contact, index) => <ContactContainer
            typeComponent={"FillOrderQuestion"}
            key={contact.idClient}
            indexQuestion={props.indexQuestion}
            indexContact={index}
            deleteResponseContact={props.actionCreators.deleteResponseContact}
            editResponseContact={props.actionCreators.editResponseContact}
            contacts={contact}
            displayOnly={props.displayOnly}
        />)
        : <NoContacts/>;

    const addButton = !props.displayOnly
        ? <AddButtonText
            iconSize={"small"}
            size={"small"}
            buttonText={'Добавить контакт'}
            onClickFunc={() => {
                props.actionCreators.addResponseContact(props.indexQuestion)
            }}
        />
        : null;


    return <div className={style.ResponseContacts}>
        <div className={style.contactsContainer}>
            {Contacts}
        </div>
        {addButton}
    </div>
};