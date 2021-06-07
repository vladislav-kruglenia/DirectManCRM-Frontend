import React, {FC} from "react";
import style from "../Accesses.module.scss";
import {Button, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {AccessTypeFormProps, ValuesFormType} from "../Types/AccessTypeFormTypes";
import {useSelector} from "react-redux";
import {getArrayAccessesTypesNamesSelector} from "../../../../../../../EditingOrderQuestionsSelectors";

function AccessNamesValidateFunction(accessName: string, accessNames: Array<string>) {
    let isSameName = false;
    accessNames.forEach(access => {
        isSameName = access === accessName ? true : isSameName
    });
    return !isSameName
}


export let AccessTypeForm: FC<AccessTypeFormProps> = (props) => {
    let accessesNames = useSelector(getArrayAccessesTypesNamesSelector);


    const validationSchema = yup.object({
        accessName: yup
            .string()
            .test('IsSameNameValidate', 'Такое название уже существует',
                // @ts-ignore // TODO: не могу разобраться с декларацией типов в yup
                (value) => AccessNamesValidateFunction(value, accessesNames))


            .required('Это поле обязательно'),
        accessLink: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
    });

    let valuesForm: ValuesFormType = {
        accessName: props.accessName,
        accessLink: props.accessLink
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: ValuesFormType) => {
            props.editNameAndLinkAccess(values.accessLink, values.accessName);
            props.exitEditMode();
            console.log(values);
        }
    });

    return <form className={style.AccessTypeForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="accessName"
                       label={"Название доступа"} variant="outlined" size={"small"}
                       value={Form.values.accessName}
                       onChange={Form.handleChange}
                       error={Form.touched.accessName && Boolean(Form.errors.accessName)}
                       helperText={Form.touched.accessName && Form.errors.accessName}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="accessLink"
                       label={"Ссылка на сайт"} variant="outlined" size={"small"}
                       value={Form.values.accessLink}
                       onChange={Form.handleChange}
                       error={Form.touched.accessLink && Boolean(Form.errors.accessLink)}
                       helperText={Form.touched.accessLink && Form.errors.accessLink}
            />
        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};

/*
import {StringSchema, BooleanSchema, boolean /!*StringSchemaConstructor*!/} from "yup";

declare module "yup" {
    interface BooleanSchema {
        AccessNamesValidateFunction(accessName: string, accessNames: Array<string>): BooleanSchema;

        AccessNamesValidate(accessName: string, accessNames: Array<string>): BooleanSchema;
    }
}

function AccessNamesValidateFunction(accessName: string, accessNames: Array<string>) {
    let isSameName = false;
    accessNames.forEach(access => {
        isSameName = access === accessName ? true : isSameName
    });
    return !isSameName
}


yup.addMethod<yup.StringSchema>(yup.string, 'AccessNamesValidate',
    function (accessName: string, accessNames: Array<string>) {
        let isSameName = false;
        const {path, createError} = this;
        accessNames.forEach(access => {
            isSameName = access === accessName ? true : isSameName
        });
        if (isSameName) return createError({path, message: "myFailureMessage"});
        return !isSameName
    });
*/








