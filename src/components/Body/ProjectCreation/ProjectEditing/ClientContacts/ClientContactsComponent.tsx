import React, {FC, useState} from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";
import {
    ClientContactsFCPropsType,
    ContactContainerPropsType,
    ContactPropsType,
    EditAndDeletePropsType
} from "./Types/ClientContactsComponentTypes";
import style from "./Styles/ClientContacts.module.scss"
import projectEditingStyle from "../ProjectEditing.module.scss";
import {FormTypeEnum, GrandFormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {Button, Divider, IconButton, Typography} from "@material-ui/core";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {EditContactsForm} from "./ClientContactsForm";
import {NoContacts} from "../Errors/ErrorsComponents";

export let ClientContactsComponent: FC<ClientContactsFCPropsType> = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer
        key={contact.idClient}
        contacts={contact}
        changeData={props.changeClientData}
        deleteContact={props.deleteContact}
    />);
    return <div className={style.ClientContacts}>
        <Typography variant={'h4'}>Контакты клиента</Typography>
        {props.clientContacts.length > 0
            ? Contacts
            : <NoContacts/>}
        <div>

            <Button className={style.addContactButton} variant={"text"} color={"default"} onClick={() => {
                props.addContact()
            }}>
                <div className={style.addContactWrapper}>
                    <div className={projectEditingStyle.icon}>
                        <PlaylistAddIcon color={"action"}/>
                    </div>
                    <div>Добавить контакт</div>
                </div>
            </Button>
        </div>
    </div>
};

export let ContactContainer: FC<ContactContainerPropsType> = (props) => {
    let editModeStatus = props.contacts.name === null
        && props.contacts.email === null
        && props.contacts.phoneNumber === null;
    let [editStatus, setEditMode] = useState(editModeStatus);
    return <div className={style.ContactContainer}>
        <ValueDisplay
            idNumbers={{idClient: props.contacts.idClient}}
            editModeStatus={editStatus}
            setEditModeInProps={(status) => {
                setEditMode(status)
            }}
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            grandFormType={GrandFormTypeEnum.UniversalComponent}
            displayComponent={<Contact contacts={props.contacts}/>}
            grandFormComponent={
                <EditContactsForm
                    email={props.contacts.email}
                    name={props.contacts.name}
                    phoneNumber={props.contacts.phoneNumber}
                    idClient={props.contacts.idClient}
                    changeClientData={props.changeData}
                    setEditMode={(status: boolean) => setEditMode(status)}
                />
            }
        />

        <EditAndDelete
            contacts={props.contacts}
            deleteContact={props.deleteContact}
            setEditMode={(status) => setEditMode(status)}
        />
    </div>
};

export let Contact: FC<ContactPropsType> = (props) => {
    return <div className={style.Contact}>
        <Typography className={style.clientName} component={'div'}
                    variant={"h6"}>
            {props.contacts.name || "Имя не указано"}
        </Typography>
        <Divider component={'div'}/>
        <div className={style.contactWrapper}>
            <div className={projectEditingStyle.icon}>
                <PhoneIcon fontSize={'small'} color={"action"}/>
            </div>
            <div>{props.contacts.phoneNumber || "Телефон не указан"}</div>
        </div>
        <div className={style.contactWrapper}>
            <div className={projectEditingStyle.icon}>
                <MailOutlineIcon fontSize={'small'} color={"action"}/>
            </div>
            <div>{props.contacts.email || "Почта не указана"}</div>
        </div>

    </div>
};

export let EditAndDelete: FC<EditAndDeletePropsType> = (props) => {
    return <div className={style.EditAndDeleteContainer}>
        <div className={style.EditAndDelete}>
            <IconButton size={'medium'} href={''} onClick={() => {
                props.setEditMode(true)
            }}>
                <EditIcon fontSize={"inherit"}/>
            </IconButton>
            <IconButton size={'medium'} href={''} onClick={() => {
                props.deleteContact(props.contacts.idClient)
            }}>
                <DeleteIcon fontSize={"inherit"}/>
            </IconButton>
        </div>
    </div>

};

