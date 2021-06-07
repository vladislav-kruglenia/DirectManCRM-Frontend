import React, {FC} from "react";
import {ClientContactsFCPropsType} from "./Types/ClientContactsComponentTypes";
import style from "./Styles/ClientContacts.module.scss"
import projectEditingStyle from "../ProjectEditing.module.scss";
import {Button, Typography} from "@material-ui/core";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {ContactContainer} from "../../../../../../../../AppGlobal/AppGlobalComponents/ContactContainer/ContactContainer";
import {NoContacts} from "../../../../../../../../AppGlobal/AppGlobalComponents/Errors/ErrorsComponents";

export let ClientContactsComponent: FC<ClientContactsFCPropsType> = (props) => {
    let Contacts = props.clientContacts.map(contact => <ContactContainer
        key={contact.idClient}
        typeComponent={"ProjectCreation"}
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

