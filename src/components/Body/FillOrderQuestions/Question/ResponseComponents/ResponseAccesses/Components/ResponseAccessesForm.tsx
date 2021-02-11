import React, {FC} from "react";
import {ResponseAccessesFormPropsType, ValuesForm} from "../../Types/ResponseAccessesTypes";
import style from "../ResponseAccesses.module.scss";
import {Button, TextField} from "@material-ui/core";
import * as yup from "yup";
import {useFormik} from "formik";

const validationSchema = yup.object({
    login: yup
        .string()
        .required('Это поле обязательно'),
    password: yup
        .string()
        .required('Это поле обязательно'),
});

export let ResponseAccessesForm: FC<ResponseAccessesFormPropsType> = (props) => {
    let valuesForm: ValuesForm = {
        login: props.login,
        password: props.password
    };
    let Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesForm) => {
            console.log(values);
            props.editResponseAccess(props.indexQuestion, props.indexAccess, {...values, accessType: props.accessType});
            props.setEditMode()
        }
    });
    return <form className={style.ResponseAccessesForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputContainer}>
            <TextField
                className={style.input}
                size={'small'} id="login" label="Логин" variant="outlined"
                value={Form.values.login}
                onChange={Form.handleChange}
                error={Form.touched.login && Boolean(Form.errors.login)}
                helperText={Form.touched.login && Form.errors.login}
                autoFocus={true}
            />
        </div>
        <div className={style.inputContainer}>
            <TextField
                className={style.input}
                size={'small'} id="password" label="Пароль" variant="outlined"
                value={Form.values.password}
                onChange={Form.handleChange}
                error={Form.touched.password && Boolean(Form.errors.password)}
                helperText={Form.touched.password && Form.errors.password}
            />
        </div>
        <div className={style.button}>
            <Button
                size={"small"}
                variant={"outlined"}
                color={"default"}
                type={"submit"}
            >
                Сохранить
            </Button>
        </div>
    </form>

};