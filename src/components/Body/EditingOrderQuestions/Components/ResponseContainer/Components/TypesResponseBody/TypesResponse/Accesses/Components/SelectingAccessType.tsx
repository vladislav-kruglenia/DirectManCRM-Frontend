import React, {FC} from "react";
import style from "../Accesses.module.scss";
import {FormControl, FormHelperText, InputLabel, Select} from "@material-ui/core";
import {SelectingAccessTypeProps} from "../Types/SelectingAccessTypeTypes";

export let SelectingAccessType: FC<SelectingAccessTypeProps> = (props) => {
    let isNotLink = props.accessData.accessLink === "";
    let errorText = isNotLink && <FormHelperText component={'span'}>Нет ссылки на сайт</FormHelperText>;

    let options = props.accessTypesArr.length > 0
        && props.accessTypesArr.map(accessType => <option
            key={accessType.idAccess}
            value={accessType.idAccess}>
            {accessType.accessName}
        </option>);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.editAccessType(event.target.value as string);
    };

    return <FormControl component={'form'} variant="standard" size={"small"} error={isNotLink} className={style.SelectingAccessType}>
        <InputLabel htmlFor="outlined-age-native-simple">Тип доступа</InputLabel>
        <Select
            native
            value={props.accessData.idAccess}
            onChange={handleChange}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
        >
            {options}
        </Select>
        {errorText}
    </FormControl>
};