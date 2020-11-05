import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let ClientContactsComponent = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer key={contact.id} contacts={contact}/>);
    return <div>
        <h3>ClientContacts</h3>
        {Contacts}
    </div>
};

export let ContactContainer = (props) => {
    return <ValueDisplay
        valueGlobal={props.contacts}
        changeValueGlobal={props.changeNameProject}
        displayComponent={<Contact contacts={props.contacts}/>}
        grandFormType={"contactsEditing"}
        displayType={"component"}
        type={"grandForm"}
    />
};

export let Contact = (props) => {
    return <>
        <div><b>Имя клиента - {props.contacts.name}</b></div>
        <div>Email - {props.contacts.email}</div>
        <div>Телефон - {props.contacts.phoneNumber}</div>
    </>
};
