import {ReactNodeArray} from "react";

export type NativeSelectProps = {
    optionValue?: string,
    errorText: string,
    labelText: string,
    OptionsArray: ReactNodeArray,
    editOptionValue: (value: string) => void,
}

export enum NativeSelectOptions {
    None = 'none',
}