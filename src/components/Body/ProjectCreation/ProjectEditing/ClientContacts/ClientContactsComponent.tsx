import React, {FC} from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";
import {
    ClientContactsFCPropsType,
    ContactContainerPropsType,
    ContactPropsType
} from "./Types/ClientContactsComponentTypes";
import style from "./Styles/ClientContacts.module.css"
import {FormTypeEnum, GrandFormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export let ClientContactsComponent: FC<ClientContactsFCPropsType> = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer
        key={contact.idClient}
        contacts={contact}
        changeData={props.changeClientData}
        deleteContact={props.deleteContact}
    />);
    return <div className={style.ClientContactsComponent}>
        <h3>ClientContacts</h3>
        {props.clientContacts.length > 0
            ? Contacts
            : "Контактов нет"}
        <div>
            <button onClick={() => {
                props.addContact()
            }}>Добавить контакт
            </button>
        </div>
    </div>
};

export let ContactContainer: FC<ContactContainerPropsType> = (props) => {
    let editModeStatus = props.contacts.name === null
        && props.contacts.email === null
        && props.contacts.phoneNumber === null;
    return <>
        <ValueDisplay
            idNumbers={{idClient: props.contacts.idClient}}
            editModeStatus={editModeStatus}
            valueGlobal={props.contacts}
            changeValueGlobal={props.changeData}
            displayComponent={<Contact contacts={props.contacts}/>}
            grandFormType={GrandFormTypeEnum.contactsEditing}
            displayType={DisplayTypeEnum.component}
            type={FormTypeEnum.grandForm}
        />
        <button onClick={()=>{props.deleteContact(props.contacts.idClient)}}>Удалить контакт</button>
    </>
};

export let Contact: FC<ContactPropsType> = (props) => {
    return <>
        <div><b>Имя клиента - {props.contacts.name || "Не указано"}</b></div>
        <div>Email - {props.contacts.email || "Не указано"}</div>
        <div>Телефон - {props.contacts.phoneNumber || "Не указано"}</div>
    </>
};
