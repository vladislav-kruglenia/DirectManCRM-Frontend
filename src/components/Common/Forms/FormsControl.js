import React from "react";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    return <>
        <div>
            {props.children}
        </div>
    </>
};


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};


export const createField = (placeholder, component, name, validators, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            component={component}
            name={name}
            validate={validators}
            {...props}
        />{text}
    </div>
);