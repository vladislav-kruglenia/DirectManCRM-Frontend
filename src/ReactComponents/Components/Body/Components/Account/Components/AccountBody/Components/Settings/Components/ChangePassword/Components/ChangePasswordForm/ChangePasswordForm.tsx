import React, {FC, useState} from "react";
import style from "../../../../../../../../../../../../../AppGlobal/AppGlobalStyles/Forms/UserDataForm/UserDataForm.module.scss";
import * as yup from "yup";
import {ChangePasswordFormProps, ChangePasswordValues} from "./ChangePasswordForm.types";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";


export const ChangePasswordForm:FC<ChangePasswordFormProps> = (props) => {
    const [isErrorPassword2, editErrorPassword2] = useState(false);

    const validationSchema = yup.object({
        oldPassword: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        newPassword1: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        newPassword2: yup
            .string()
            .nullable()
            /*.test('isPasswordsMatch', 'Пароли не совпадают', (value)=>{
                // @ts-ignore
                const newPassword1 = this ? this.newPassword1 : null;
                debugger
                return newPassword1 === value;
            })*/
            .required('Это поле обязательно'),
    });


    const Form = useFormik<ChangePasswordValues>({
        initialValues: {
            oldPassword: '',
            newPassword1: '',
            newPassword2: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: ChangePasswordValues) => {
            const {newPassword1, newPassword2} = values;
            const isPasswordsMatch = newPassword1 === newPassword2;
            if(isPasswordsMatch){
                editErrorPassword2(false);
                props.exitEditMode();
                console.log(values);
            } else {
                editErrorPassword2(true)
            }
        }
    });

    return <form className={style.UserDataForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="oldPassword"
                       label={"Старый пароль"} variant="outlined" size={"small"}
                       value={Form.values.oldPassword}
                       onChange={Form.handleChange}
                       error={Form.touched.oldPassword && Boolean(Form.errors.oldPassword)}
                       helperText={Form.touched.oldPassword && Form.errors.oldPassword}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="newPassword1"
                       label={"Новый пароль"} variant="outlined" size={"small"}
                       value={Form.values.newPassword1}
                       onChange={Form.handleChange}
                       error={Form.touched.newPassword1 && Boolean(Form.errors.newPassword1)}
                       helperText={Form.touched.newPassword1 && Form.errors.newPassword1}
            />
            <TextField className={style.textField} id="newPassword2"
                       label={"Повторите новый пароль"} variant="outlined" size={"small"}
                       value={Form.values.newPassword2}
                       onChange={Form.handleChange}
                       error={(Form.touched.newPassword1 && Boolean(Form.errors.newPassword1)) || isErrorPassword2}
                       helperText={(Form.touched.newPassword1 && Form.errors.newPassword1) || (isErrorPassword2 && 'Пароли не совпадают')}
            />

        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit"
        >
            Сохранить
        </Button>
    </form>
};
