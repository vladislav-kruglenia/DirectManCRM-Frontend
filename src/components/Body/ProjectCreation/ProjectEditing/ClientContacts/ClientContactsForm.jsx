import React from "react";
import {createField, Input} from "../../../../Common/Forms/FormsControl";
import {reduxForm} from "redux-form";

let EditingContacts = (props) => {
    let changeContactData = (contactsFormData) => {
        console.log(contactsFormData);
        props.changeValueGlobal(contactsFormData);
        props.setEditMode(false)
    };
    return <ContactFormContainer onSubmit={changeContactData} initialValues={props.contacts}/>
};

let ContactForm = ({handleSubmit}) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>Email:</div>
            {createField('email', Input, 'email', null, {type: "text"})}

            <div>Имя клиента:</div>
            {createField('name', Input, 'name', null, {type: "text"})}

            <div>Телефон:</div>
            {createField('phoneNumber', Input, 'phoneNumber', null, {type: "text"})}
            <div>
                <button>Сохранить</button>
            </div>
        </form>
    </>
};

const ContactFormContainer = reduxForm({form: 'contactsEditing'})(ContactForm);

export default EditingContacts