import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let ClientContactsComponent = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer
        key={contact.idClient}
        contacts={contact}
        changeData={props.changeClientData}
    />);
    return <div>
        <h3>ClientContacts</h3>
        {Contacts}
        <div>
            <button onClick={()=>{props.addContact()}}>Добавить контакт</button>
        </div>
    </div>
};

export let ContactContainer = (props) => {
    return <>
        <ValueDisplay
            valueGlobal={props.contacts}
            changeValueGlobal={props.changeData}
            displayComponent={<Contact contacts={props.contacts}/>}
            grandFormType={"contactsEditing"}
            displayType={"component"}
            type={"grandForm"}
        />
        <button>Удалить контакт</button>
    </>
};

export let Contact = (props) => {
    return <>
        <div><b>Имя клиента - {props.contacts.name}</b></div>
        <div>Email - {props.contacts.email}</div>
        <div>Телефон - {props.contacts.phoneNumber}</div>
    </>
};
