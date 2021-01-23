import React, {FC, useState} from "react";
import style from "../FillOrderQuestions.module.scss";
import {Button, TextField, Typography} from "@material-ui/core";
import {DisplayResponseType, EditResponseFormProps, QuestionPropsTypes, ValuesFormType} from "./Types/QuestionTypes";
import * as yup from "yup";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {actionCreators} from "../../../../redux/fillOrderQuestionsReducer";

export let Question: FC<QuestionPropsTypes> = (props) => {
    let [editMode, setEditMode] = useState(true);
    return <div className={style.questionContainer}>
        <Typography className={style.question} variant={'h5'}>
            {`${props.indexQuestion + 1}. ${props.question}`}
        </Typography>

        {editMode
            ? <EditResponseForm
                indexQuestion={props.indexQuestion}
                response={props.response}
                setEditMode={(value: boolean) => setEditMode(value)}
            />
            : <DisplayResponse response={props.response} setEditMode={(value: boolean) => setEditMode(value)}/>
        }
    </div>;
};

export let DisplayResponse: FC<DisplayResponseType> = (props) => {
    return <div onDoubleClick={() => props.setEditMode(true)}>
        <Typography component={'div'} className={style.response} variant={"subtitle1"}>
            {props.response !== '' ? `${props.response}` : 'Поле не заполнено'}
        </Typography>
    </div>
};

const validationSchema = yup.object({
    response: yup
        .string()
        .required('Это поле обязательно')
});

export let EditResponseForm: FC<EditResponseFormProps> = (props) => {
    let dispatch = useDispatch();
    let editResponseText = (indexQuestion: number, textResponse: string) => {
        dispatch(actionCreators.editResponseText(indexQuestion, textResponse))
    };

    let valuesForm: ValuesFormType = {
        response: props.response
    };

    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            console.log(values);
            editResponseText(props.indexQuestion, values.response);
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
            error={Form.touched.response && Boolean(Form.errors.response)}
            helperText={Form.touched.response && Form.errors.response}
        />
        <Button className={style.editButton} variant={"outlined"} color={"default"} type={"submit"}>Сохранить</Button>
    </form>
};