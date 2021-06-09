import React, {FC} from "react";
import {EditResponseFormProps, ValuesFormType} from "../../../Types/ResponseTextTypes";
import * as yup from "yup";
import {useFormik} from "formik";
import style from "../../ResponseText.module.scss";
import {Button, TextField} from "@material-ui/core";

export const EditResponseForm: FC<EditResponseFormProps> = (props) => {

    const validationSchema = yup.object({
        response: yup
            .string()
            .required('Это поле обязательно')
    });

    const valuesForm: ValuesFormType = {
        response: props.response
    };

    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            console.log(values);
            props.editResponseText(props.indexQuestion, values.response);
            props.setEditMode(false)
        }
    });

    return <form className={style.editResponseContainer} onSubmit={Form.handleSubmit}>
        <TextField
            className={style.editResponse}
            id="response"
            label="Ответ"
            multiline
            variant="outlined"
            value={Form.values.response}
            onChange={Form.handleChange}
            autoFocus={true}
            error={Form.touched.response && Boolean(Form.errors.response)}
            helperText={Form.touched.response && Form.errors.response}
        />
        <Button className={style.editButton} variant={"outlined"} color={"default"} type={"submit"}>Сохранить</Button>
    </form>
};