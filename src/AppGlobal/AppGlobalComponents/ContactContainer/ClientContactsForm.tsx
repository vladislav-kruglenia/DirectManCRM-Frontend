import React, {FC} from "react";
import {ChangeContactDataType, EditContactsFormPropsType} from "./Types/ClientContactsFormTypes";
import * as yup from "yup";
import {useFormik} from "formik";
import style from "./ContactContainer.module.scss";
import {Button, TextField} from "@material-ui/core";
import {ClientContactType} from "./Types/ContactContainerTypes";

const validationSchema = yup.object({
    name: yup
        .string()
        .nullable()
        .required('Это поле обязательно'),
    email: yup
        .string()
        .nullable()
        .email('Введите корректную почту')
        .required('Это поле обязательно'),
    phoneNumber: yup
        .string()
        .nullable()
        .length(13, "Введите корректный номер телефона(13 символов)")
        .required('Это поле обязательно'),

});

export let EditContactsForm: FC<EditContactsFormPropsType> = (props) => {

    let valuesForm: ClientContactType = {
        idClient: props.idClient,
        email: props.email,
        name: props.name,
        phoneNumber: props.phoneNumber
    };

    let changeContactData: ChangeContactDataType;
    switch (props.typeComponent) {
        case "ProjectCreation": {
            changeContactData = (values) => {
                props.changeClientData
                    ? props.changeClientData(values)
                    : console.log("Ошибка Types")
            };

            break
        }
        case "FillOrderQuestion": {
            changeContactData = (values) => {
            debugger
                props.editResponseContact
                    ? props.editResponseContact(props.indexQuestion, props.indexContact, values)
                    :console.log("Нет функции editResponseContact")

            };
            break
        }
    }

    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ClientContactType) => {
            console.log(values);
            changeContactData(values);
            props.setEditMode(false)
        }
    });
    return <>
        <form className={style.EditContactsForm} onSubmit={Form.handleSubmit}>
            <div className={style.inputs}>
                <TextField className={style.clientContactInput} id="name"
                           label="Имя клиента" variant="outlined" size={"small"}
                           value={Form.values.name}
                           onChange={Form.handleChange}
                           error={Form.touched.name && Boolean(Form.errors.name)}
                           helperText={Form.touched.name && Form.errors.name}
                           autoFocus={true}
                />
                <TextField className={style.clientContactInput} id="email"
                           label="Почта клиента" variant="outlined" size={"small"}
                           value={Form.values.email}
                           onChange={Form.handleChange}
                           error={Form.touched.email && Boolean(Form.errors.email)}
                           helperText={Form.touched.email && Form.errors.email}
                />
                <TextField className={style.clientContactInput} id="phoneNumber"
                           label="Телефон клиента" variant="outlined" size={"small"}
                           value={Form.values.phoneNumber}
                           onChange={Form.handleChange}
                           error={Form.touched.phoneNumber && Boolean(Form.errors.phoneNumber)}
                           helperText={Form.touched.phoneNumber && Form.errors.phoneNumber}
                />
            </div>
            <div className={style.serviceEditButton}>
                <Button size={"small"} href={''} color="default" variant="outlined" type="submit">
                    Сохранить
                </Button>
            </div>

        </form>
    </>
};