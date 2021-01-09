import {WrappedFieldMetaProps} from "redux-form";

export type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export type FieldValidatorType = (value: string) => string | undefined