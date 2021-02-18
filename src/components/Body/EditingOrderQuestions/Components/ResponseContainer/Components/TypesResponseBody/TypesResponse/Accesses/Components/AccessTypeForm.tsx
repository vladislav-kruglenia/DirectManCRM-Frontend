import React, {FC} from "react";
import style from "../Accesses.module.scss";
import {Button, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {AccessTypeFormProps, ValuesFormType} from "../Types/AccessTypeFormTypes";

const validationSchema = yup.object({
    accessName: yup
        .string()
        .nullable()
        .required('Это поле обязательно'),
    accessLink: yup
        .string()
        .nullable()
        .required('Это поле обязательно'),
});

export let AccessTypeForm: FC<AccessTypeFormProps> = (props) => {
    let valuesForm: ValuesFormType = {
        accessName: props.accessName,
        accessLink: props.accessLink
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            console.log(values);
        }
    });

    return <form className={style.AccessTypeForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="accessName"
                       label={"Название доступа"} variant="outlined" size={"small"}
                       value={Form.values.accessName}
                       onChange={Form.handleChange}
                       error={Form.touched.accessName && Boolean(Form.errors.accessName)}
                       helperText={Form.touched.accessName && Form.errors.accessName}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="accessLink"
                       label={"Ссылка на сайт"} variant="outlined" size={"small"}
                       value={Form.values.accessLink}
                       onChange={Form.handleChange}
                       error={Form.touched.accessLink && Boolean(Form.errors.accessLink)}
                       helperText={Form.touched.accessLink && Form.errors.accessLink}
            />
        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};