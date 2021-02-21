export type OneInputTextProps = {
    formValue: string,
    label: string,
    textFieldSize: 'small' | 'medium',
    exitEditMode: () => void,
    editText: (text: string) => void
}

export type ValuesFormType = {
    formValue: string,
}

