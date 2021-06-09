import React, {FC, useState} from "react";
import {Checkbox} from "@material-ui/core";
import {CheckboxFragmentProps} from "./CheckboxFragment.types";

export const CheckboxFragment:FC<CheckboxFragmentProps> = (props) => {
    const {isChecked} = props;
    const [checked, editChecked] = useState(isChecked);

    return <React.Fragment>
        <Checkbox
            checked={checked}
            onChange={() => {
                editChecked(!checked)
            }}
            name="checkedB"
            color="primary"
            size={"small"}
        />
    </React.Fragment>
};