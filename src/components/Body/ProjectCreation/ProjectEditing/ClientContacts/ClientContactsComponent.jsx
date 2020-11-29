import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let ClientContactsComponent = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer
        key={contact.idClient}
        contacts={contact}
        changeData={props.changeClientData}
        deleteContact={props.deleteContact}
    />);
    return <div>
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

export let ContactContainer = (props) => {
    let editModeStatus = props.contacts.name === null
        && props.contacts.email === null
        && props.contacts.phoneNumber === null;
    return <>
        <ValueDisplay
            editModeStatus={editModeStatus}
            valueGlobal={props.contacts}
            changeValueGlobal={props.changeData}
            displayComponent={<Contact contacts={props.contacts}/>}
            grandFormType={"contactsEditing"}
            displayType={"component"}
            type={"grandForm"}
        />
        <button onClick={()=>{props.deleteContact(props.contacts.idClient)}}>Удалить контакт</button>
    </>
};

export let Contact = (props) => {
    return <>
        <div><b>Имя клиента - {props.contacts.name || "Не указано"}</b></div>
        <div>Email - {props.contacts.email || "Не указано"}</div>
        <div>Телефон - {props.contacts.phoneNumber || "Не указано"}</div>
    </>
};
