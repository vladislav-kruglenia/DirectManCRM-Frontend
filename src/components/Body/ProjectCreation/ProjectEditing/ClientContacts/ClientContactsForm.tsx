import React, {FC} from "react";
import {createField, Input} from "../../../../Common/Forms/FormsControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ContactFormKeysType, ContactFormOwnProps, EditingContactsPropsType} from "./Types/ClientContactsFormTypes";
import {ClientContactType} from "../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

let EditingContacts: FC<EditingContactsPropsType> = (props) => {
    let changeContactData = (contactsFormData: ClientContactType) => {
        console.log(contactsFormData);
        props.changeValueGlobal(contactsFormData);
        props.setEditMode(false)
    };
    return <ContactFormContainer onSubmit={changeContactData} initialValues={props.contacts}/>
};

let ContactForm: FC<InjectedFormProps<ClientContactType, ContactFormOwnProps> & ContactFormOwnProps> = ({handleSubmit}) => {
    return <>
        <form onSubmit={handleSubmit} onKeyPress={(event) => {
            if (event.key === "Enter") {
                // @ts-ignore TODO: ts-ignore - handleSubmit
                handleSubmit();
            }
        }}>
            <div>Имя клиента:</div>
            {createField<ContactFormKeysType>('name', Input, 'name', [], {type: "text", autoFocus: true})}

            <div>Email:</div>
            {createField<ContactFormKeysType>('email', Input, 'email', [], {type: "text"})}

            <div>Телефон:</div>
            {createField<ContactFormKeysType>('phoneNumber', Input, 'phoneNumber', [], {type: "text"})}
            <div>
                <button>Сохранить</button>
            </div>
        </form>
    </>
};

const ContactFormContainer = reduxForm<ClientContactType, ContactFormOwnProps>({form: 'contactsEditing'})(ContactForm);

export default EditingContacts