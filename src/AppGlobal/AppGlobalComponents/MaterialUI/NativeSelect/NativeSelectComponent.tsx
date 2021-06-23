import React, {FC, useState} from "react";
import style from "./NativeSelect.module.scss"
import {FormControl, FormHelperText, InputLabel, NativeSelect} from "@material-ui/core";
import {NativeSelectOptions, NativeSelectProps} from "./NativeSelect.types";


export const NativeSelectComponent: FC<NativeSelectProps> = (props) => {
    const optionNone = NativeSelectOptions.None;

    const [optionValue, editOptionValue] = useState(props.optionValue || optionNone); // Todo: убрать useState, когда будут готовы AC

    const isTypeNotSelected = optionValue === optionNone;
    const ErrorText = isTypeNotSelected &&
        <FormHelperText component={'span'}>{props.errorText}</FormHelperText>;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.editOptionValue(event.target.value as string);
        editOptionValue(event.target.value as string);
    };

    return <FormControl component={'form'} className={style.NativeSelect} error={isTypeNotSelected}>
        <InputLabel htmlFor="age-native-helper">{props.labelText}</InputLabel>
        <NativeSelect
            value={optionValue}
            onChange={handleChange}
        >
            <option value={optionNone}>Не выбрано</option>
            {props.OptionsArray}
        </NativeSelect>
        {ErrorText}
    </FormControl>
};