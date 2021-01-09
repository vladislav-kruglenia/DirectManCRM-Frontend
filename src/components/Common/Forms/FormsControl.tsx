import React, {FC} from "react";
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType, FormControlPropsType} from "./FormsControlTypes";

const FormControl: FC<FormControlPropsType> = ({meta, ...props}) => {
    return <>
        <div>
            {props.children}
        </div>
    </>
};


export const Textarea: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};


export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            component: FC<WrappedFieldProps>,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            props = {},
                            text = "") {
    return <div>
        <Field
            placeholder={placeholder}
            component={component}
            name={name}
            validate={validators}
            {...props}
        />{text}
    </div>;
}