import React from "react";
import style from "./SelectingTypeResponse.module.scss"
import {FormControl, InputLabel, NativeSelect, Typography} from "@material-ui/core";

export let SelectingTypeResponse = () => {
    return <div className={style.SelectingTypeResponse}>
        <Typography variant={"body2"} className={style.selectingTypeTitle}>Выберите тип ответа:</Typography>
        <FormControl className={style.formControl}>
            <InputLabel htmlFor="age-native-helper">Тип ответа</InputLabel>
            <NativeSelect
                value={'state.age'}
                onChange={()=>{}}
                inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                }}
            >
                <option aria-label="None" value="" />
                <option value={20}>Доступы к аккаунтам</option>
                <option value={30}>Ссылки на товары или видео</option>
                <option value={10}>Текст</option>
                <option value={10}>Контакты</option>
            </NativeSelect>
        </FormControl>
    </div>
};