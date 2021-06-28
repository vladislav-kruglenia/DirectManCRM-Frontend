import React, {FC, useEffect} from "react";
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
    const {isMultiline, formValue, isReset, textFieldVariant, autoFocus, onBlur, textFieldSize} = props;

    const valuesForm: ValuesFormType = {
        formValue
    };

    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values: ValuesFormType, { resetForm }) => {
            console.log(values);
            props.exitEditMode();
            props.editText(values.formValue);
            if(isReset) resetForm();
        },
    });

    useEffect(() => {
        Form.values.formValue = formValue
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[formValue]);

    const handleBlur = () => {
        if(onBlur) onBlur(Form.values.formValue)
    };

    return <form className={style.OneInputText} onSubmit={Form.handleSubmit}>
            <TextField className={style.textField} id="formValue"
                       label={props.label} variant={textFieldVariant || "outlined"} size={props.textFieldSize}
                       value={Form.values.formValue}
                       multiline={isMultiline}
                       onChange={Form.handleChange}
                       error={Form.touched.formValue && Boolean(Form.errors.formValue)}
                       helperText={Form.touched.formValue && Form.errors.formValue}
                       autoFocus={autoFocus}
                       onBlur={handleBlur}
            />
            <Button className={style.formButton} size={textFieldSize || "small"} href={''}
                    color="default" variant="outlined" type="submit"
                    disabled={!Boolean(Form.values.formValue)}
            >
                Сохранить
            </Button>
        </form>
};