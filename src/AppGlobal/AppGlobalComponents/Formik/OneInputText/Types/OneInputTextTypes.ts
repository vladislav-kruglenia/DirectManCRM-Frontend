export type OneInputTextProps = {
    formValue: string,
    label: string,
    textFieldSize: 'small' | 'medium',
    isMultiline?: boolean,
    isReset?: boolean,
    textFieldVariant?: "standard" | "outlined",
    autoFocus?: boolean,
    onBlur?: (text: string) => void,
    exitEditMode: () => void,
    editText: EditTextFuncType,
}

export type ValuesFormType = {
    formValue: string,
}

export type EditTextFuncType = (text: string) => void

