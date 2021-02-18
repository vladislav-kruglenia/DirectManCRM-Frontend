import React from "react";
import style from "../Accesses.module.scss";
import {FormControl, InputLabel, Select} from "@material-ui/core";

export let SelectingAccessType = () => {
    return <FormControl variant="standard" size={"small"} className={style.SelectingAccessType}>
        <InputLabel htmlFor="outlined-age-native-simple">Тип доступа</InputLabel>
        <Select
            native
            value={""}
            onChange={() => {
            }}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
        >
            <option aria-label="None" value=""/>
            <option value={10}>Яндекс</option>
            <option value={20}>Гугл</option>
            <option value={30}>Сайт</option>
        </Select>
    </FormControl>
};