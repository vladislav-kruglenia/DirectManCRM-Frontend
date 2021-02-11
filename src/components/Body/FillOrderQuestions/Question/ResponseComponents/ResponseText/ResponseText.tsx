import React, {FC, useState} from "react";
import {useFormik} from "formik";
import style from "./ResponseText.module.scss";
import {Button, TextField, Typography} from "@material-ui/core";
import * as yup from "yup";
import {
    DisplayResponseType,
    EditResponseFormProps,
    ResponseTextPropsTypes,
    ValuesFormType
} from "../Types/ResponseTextTypes";
import {ValueDisplay} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export let ResponseText: FC<ResponseTextPropsTypes> = (props) => {
    let [editMode, setEditMode] = useState(!props.isChanged);
    return <div>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            editModeStatus={editMode}
            displayType={DisplayTypeEnum.component}
            setEditModeInProps={value => setEditMode(value)}
            isNotAllowedToExitEditMode={!props.isChanged}
            displayComponent={<DisplayResponse response={props.responseData} setEditMode={(value: boolean) => setEditMode(value)}/>}
            grandFormComponent={<EditResponseForm
                indexQuestion={props.indexQuestion}
                response={props.responseData}
                setEditMode={(value: boolean) => setEditMode(value)}
                editResponseText={props.editResponseText}
            />}
        />
        {/*{editMode
            ? <EditResponseForm
                indexQuestion={props.indexQuestion}
                response={props.responseData}
                setEditMode={(value: boolean) => setEditMode(value)}
                editResponseText={props.editResponseText}
            />
            : <DisplayResponse response={props.responseData} setEditMode={(value: boolean) => setEditMode(value)}/>
        }*/}
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
    /*let dispatch = useDispatch();
    let editResponseText = (indexQuestion: number, textResponse: string) => {
        dispatch(actionCreators.editResponseText(indexQuestion, textResponse))
    };*/

    let valuesForm: ValuesFormType = {
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