import React, {FC} from "react";
import style from "./OneInputText.module.scss"
import * as yup from "yup";
import {Button, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {OneInputTextProps, ValuesFormType} from "./Types/OneInputTextTypes";

const validationSchema = yup.object({
    formValue: yup
        .string()
        .nullable()
        .required('Это поле обязательно'),
});

export const OneInputText:FC<OneInputTextProps> = (props) => {
    const {multiline, formValue} = props;

    let valuesForm: ValuesFormType = {
        formValue
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            console.log(values);
            props.exitEditMode();
            props.editText(values.formValue)
        }
    });

    return <form className={style.OneInputText} onSubmit={Form.handleSubmit}>
            <TextField className={style.textField} id="formValue"
                       label={props.label} variant="outlined" size={props.textFieldSize}
                       value={Form.values.formValue}
                       multiline={multiline}
                       onChange={Form.handleChange}
                       error={Form.touched.formValue && Boolean(Form.errors.formValue)}
                       helperText={Form.touched.formValue && Form.errors.formValue}
                       autoFocus={true}
            />
            <Button className={style.formButton} size={"small"} href={''}
                    color="default" variant="outlined" type="submit">
                Сохранить
            </Button>
        </form>
};