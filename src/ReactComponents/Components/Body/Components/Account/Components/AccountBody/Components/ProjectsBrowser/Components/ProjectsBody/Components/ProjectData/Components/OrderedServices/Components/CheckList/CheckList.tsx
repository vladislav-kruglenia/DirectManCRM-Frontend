import React, {FC} from "react";
import style from "../../OrderedServices.module.scss";
import {OrderedService} from "../../../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";
import {FormControlLabel, FormGroup} from "@material-ui/core";
import {CheckboxFragment} from "./Components/CheckboxFragment/CheckboxFragment";
import {CheckListProps} from "./CheckList.types";

export const CheckList: FC<CheckListProps> = (props) => {
    const formControlLabels = props.services.map((service: OrderedService) => (
        <FormControlLabel
            key={service.serviceName}
            control={
                <CheckboxFragment
                    isChecked={service.isReady}
                />
            }
            label={service.serviceName}
        />));

    return <div className={style.CheckList}>
        <FormGroup>
            {formControlLabels}
        </FormGroup>
    </div>
};

