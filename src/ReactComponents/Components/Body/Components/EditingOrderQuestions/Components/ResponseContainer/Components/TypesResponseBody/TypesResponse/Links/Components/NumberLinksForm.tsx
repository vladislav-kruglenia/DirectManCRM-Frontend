import * as yup from "yup";
import React, {FC} from "react";
import {NumberLinksFormProps, ValuesFormType} from "../Types/NumberLinksFormTypes";
import {useFormik} from "formik";
import style from "../Links.module.scss";
import {Button, TextField} from "@material-ui/core";

const validationSchema = yup.object({
    numberLinks: yup
        .number()
        .min(0, "Число не может быть отрицательным")
        .max(20, "Максимум 20 ссылок")
        .required('Это поле обязательно'),
});
export let NumberLinksForm: FC<NumberLinksFormProps> = (props) => {
    let valuesForm: ValuesFormType = {
        numberLinks: props.numberLinks
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            props.editNumberLinks(values.numberLinks);
            props.exitEditMode();
            console.log(values);
        }
    });

    return <form className={style.NumberLinksForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="numberLinks"
                       type="number"
                       label={"Количество ссылок"} variant="outlined" size={"small"}
                       value={Form.values.numberLinks}
                       onChange={Form.handleChange}
                       error={Form.touched.numberLinks && Boolean(Form.errors.numberLinks)}
                       helperText={Form.touched.numberLinks && Form.errors.numberLinks}
                       autoFocus={true}
            />
        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};