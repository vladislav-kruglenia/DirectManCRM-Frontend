import React, {FC, memo} from "react";
import style from "../../../../../../../../../../../../../AppGlobal/AppGlobalStyles/Forms/UserDataForm/UserDataForm.module.scss";
import * as yup from "yup";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {UserProfileDataFormProps} from "./UserProfileDataForm.types";
import {MainUserProfileData} from "../../UserProfileData.types";
import InputMask from "react-input-mask";

export const UserProfileDataForm:FC<UserProfileDataFormProps> = (props) => {
    // const {loading, error} = props.mutationData;
    const {userName, userNumberPhone, userLogin} = props.userData;

    const colorButton = 'default';

    const validationSchema = yup.object({
        userName: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        userNumberPhone: yup
            .string()
            .nullable()
            .test('Phone not write', "Номер введен не полностью", (value) => value ? !(value.match(/_/)) : false)
            .required('Это поле обязательно'),
        userLogin: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
    });

    const valuesForm: MainUserProfileData = {userName, userNumberPhone, userLogin};

    const Form = useFormik<MainUserProfileData>({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            props.exitEditMode();
            console.log(values);
        }
    });

    return <form className={style.UserDataForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="userName"
                       label={"Ваше имя"} variant="outlined" size={"small"}
                       value={Form.values.userName}
                       onChange={Form.handleChange}
                       error={Form.touched.userName && Boolean(Form.errors.userName)}
                       helperText={Form.touched.userName && Form.errors.userName}
                       autoFocus={true}
            />

            <TextField className={style.textField} id="userLogin"
                       label={"Ваш логин"} variant="outlined" size={"small"}
                       value={Form.values.userLogin}
                       onChange={Form.handleChange}
                       error={Form.touched.userLogin && Boolean(Form.errors.userLogin)}
                       helperText={Form.touched.userLogin && Form.errors.userLogin}
            />
            <InputMask
                mask="+375 (99) 999-99-99"
                value={Form.values.userNumberPhone}
                onChange={Form.handleChange}
            >
                {() => (
                    <TextField  id="userNumberPhone" className={style.textField}
                                label={"Ваш телефон"} variant="outlined" size={"small"}
                                error={Form.touched.userNumberPhone && Boolean(Form.errors.userNumberPhone)}
                                helperText={Form.touched.userNumberPhone && Form.errors.userNumberPhone}
                    />
                )}
            </InputMask>
        </div>
        <Button className={style.formButton} size={"small"} href={''} disabled={false} color={colorButton}
                variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};

export const UserProfileDataFormMemo = memo<UserProfileDataFormProps>(UserProfileDataForm);

