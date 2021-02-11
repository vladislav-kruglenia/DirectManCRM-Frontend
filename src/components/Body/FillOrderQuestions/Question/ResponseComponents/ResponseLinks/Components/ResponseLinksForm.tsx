import style from "./../ResponseLinks.module.scss";
import {Button, TextField} from "@material-ui/core";
import React, {FC} from "react";
import * as yup from "yup";
import {ResponseLinksFormType} from "../../Types/ResponseLinksTypes";
import {LinkData} from "../../../../../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";
import {useFormik} from "formik";

const validationSchema = yup.object({
    productName: yup
        .string()
        .required('Это поле обязательно'),
    productLink: yup
        .string()
        .required('Это поле обязательно'),
});

export let ResponseLinksForm: FC<ResponseLinksFormType> = (props) => {
    let valuesForm: LinkData = {
        isChanged: true,
        productName: props.linkData.productName,
        productLink: props.linkData.productLink
    };
    let Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: LinkData) => {
            console.log(values);
            props.editLinkData(props.indexQuestion, props.indexLink, values);
            /*TODO: при отправке левой ссылки приложение вызывает само себя. Исправить: если такой сслыки нет в приложении, то пусть редиректит на страницу с ошибкой*/
            props.setEditMode(false)
        }
    });
    return <form className={style.formContainer} onSubmit={Form.handleSubmit}>
        <div className={style.editLinkProduct}>
            <TextField
                className={style.editResponseInput}
                size={'small'} id="productName" label="Название товара/видео" variant="outlined" autoFocus={true}
                value={Form.values.productName}
                onChange={Form.handleChange}
                error={Form.touched.productName && Boolean(Form.errors.productName)}
                helperText={Form.touched.productName && Form.errors.productName}
            />
            <TextField
                className={style.editResponseInput}
                size={'small'} id="productLink" label="Ссылка" variant="outlined"
                value={Form.values.productLink}
                onChange={Form.handleChange}
                error={Form.touched.productLink && Boolean(Form.errors.productLink)}
                helperText={Form.touched.productLink && Form.errors.productLink}
            />

        </div>
        <Button
            className={style.editButton}
            size={"small"}
            variant={"outlined"}
            color={"default"}
            type={"submit"}
        >
            Сохранить
        </Button>
    </form>

};