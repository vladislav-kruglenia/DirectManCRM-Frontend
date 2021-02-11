import React, {FC, useState} from "react";
import style from "./ContactContainer.module.scss";
import {Divider, Typography} from "@material-ui/core";
import {ValueDisplay} from "../DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {EditContactsForm} from "./ClientContactsForm";
import projectEditingStyle from "../../../components/Body/ProjectCreation/ProjectEditing/ProjectEditing.module.scss";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {ContactContainerProps, ContactPropsType, EditAndDeletePropsType} from "./Types/ContactContainerTypes";
import {DeleteButton, EditButton} from "../MaterialUI/MaterialButtons/MaterialButtons";

export let ContactContainer: FC<ContactContainerProps> = (props) => {
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
            isNotAllowedToExitEditMode={editModeStatus}
            displayComponent={<Contact contacts={props.contacts}/>}
            grandFormComponent={
                <EditContactsForm
                    typeComponent={props.typeComponent}
                    indexQuestion={props.indexQuestion || 0}
                    indexContact={props.indexContact || 0}
                    email={props.contacts.email}
                    name={props.contacts.name}
                    phoneNumber={props.contacts.phoneNumber}
                    idClient={props.contacts.idClient}
                    changeClientData={props.changeData}
                    editResponseContact={props.editResponseContact}
                    setEditMode={(status: boolean) => setEditMode(status)}
                />
            }
        />

        <EditAndDelete
            typeComponent={props.typeComponent}
            indexQuestion={props.indexQuestion || 0}
            indexContact={props.indexContact || 0}
            contacts={props.contacts}
            deleteContact={props.deleteContact}
            deleteResponseContact={props.deleteResponseContact}
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
    let deleteContactFunction = () => {};
    switch (props.typeComponent) {
        case "ProjectCreation": {
            deleteContactFunction = () => {
                props.deleteContact && props.deleteContact(props.contacts.idClient)
            };
            break
        }
        case "FillOrderQuestion": {
            deleteContactFunction = () => {
                props.deleteResponseContact && props.deleteResponseContact(props.indexQuestion, props.indexContact)
            };
            break
        }
    }

    return <div className={style.EditAndDeleteContainer}>
        <div className={style.EditAndDelete}>
            <EditButton
                onClickFunc={() => props.setEditMode(true)}
            />
            <DeleteButton
                onClickFunc={() => deleteContactFunction()}
            />
        </div>
    </div>
};