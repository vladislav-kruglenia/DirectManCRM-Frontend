import React, {FC} from "react";
import style from "./SelectingTypeResponse.module.scss"
import {FormControl, FormHelperText, InputLabel, NativeSelect, Typography} from "@material-ui/core";
import {SelectingTypeResponseProps} from "./Types/SelectingTypeResponseTypes";
import {OrderQuestionResponseTypes} from "../../../../../../../../../AppGlobal/AppGlobalTypes/TypesComponents";

export let SelectingTypeResponse: FC<SelectingTypeResponseProps> = (props) => {
    let isTypeNotSelected = props.type === "None";
    let errorText = isTypeNotSelected && <FormHelperText component={'span'}>Тип ответа не выбран</FormHelperText>;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.editResponseType(event.target.value as OrderQuestionResponseTypes);
    };
    return <div className={style.SelectingTypeResponse}>
        <Typography component={'span'} variant={"body2"} className={style.selectingTypeTitle}>Выберите тип ответа:</Typography>
        <FormControl component={'form'} className={style.formControl} error={isTypeNotSelected}>
            <InputLabel htmlFor="age-native-helper">Тип ответа</InputLabel>
            <NativeSelect
                value={props.type}
                onChange={handleChange}
                /*inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                }}*/
            >
                <option value="None">Не выбрано</option>
                <option value={"Accesses"}>Доступы к аккаунтам</option>
                <option value={"Links"}>Ссылки на товары или видео</option>
                <option value={"Text"}>Текст</option>
                <option value={"Contacts"}>Контакты</option>
            </NativeSelect>
            {errorText}
        </FormControl>
    </div>
};