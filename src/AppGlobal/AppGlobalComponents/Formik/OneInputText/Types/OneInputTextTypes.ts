export type OneInputTextProps = {
    formValue: string,
    label: string,
    textFieldSize: 'small' | 'medium',
    isMultiline?: boolean,
    isReset?: boolean,
    textFieldVariant?: "standard" | "outlined",
    exitEditMode: () => void,
    editText: (text: string) => void
}

export type ValuesFormType = {
    formValue: string,
}

