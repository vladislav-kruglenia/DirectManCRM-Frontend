import React, {FC, useState} from "react";
import style from "./Links.module.scss";
import styleTypesResponseBody from "../../TypesResponseBody.module.scss";
import {Typography} from "@material-ui/core";
import {ValueDisplay} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {EditButton} from "../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {NumberLinksForm} from "./Components/NumberLinksForm";
import {DisplayNumberLinksProps, LinksProps} from "./Types/LinksTypes";
import {editNumberLinks} from "../../../../../../../../../redux/editingOrderQuestionsReducer"
import {useDispatch} from "react-redux";
import {EditNumberLinksPayload} from "../../../../../../../../../redux/Types/EditingOrderQuestions/ActionPayloadsTypes";

export let Links:FC<LinksProps> = (props) => {
    let dispatch = useDispatch();

    let editNumberLinksAction = (indexQuestion: number, numberLinks: number) => {
        let action: EditNumberLinksPayload = {indexQuestion, numberLinks};
        dispatch(editNumberLinks(action))
    };

    let [editMode, setEditMode] = useState(false);
    return <div className={style.Links}>
        <Typography component={'span'} variant={"body2"} className={styleTypesResponseBody.TypesResponseBodyTitle}>
            В этом поле клиент будет добавлять ссылки и названия товаров.
            Вам необходимо установить количество ссылок, которым разрешено распоряжаться клиенту:
        </Typography>
        <div className={style.numberLinks}>
            <ValueDisplay
                type={FormTypeEnum.grandForm}
                displayType={DisplayTypeEnum.component}
                editModeStatus={editMode}
                setEditModeInProps={(value) => setEditMode(value)}
                displayComponent={<DisplayNumberLinks
                    numberLinks={props.numberLinks}
                    setEditMode={(value)=>setEditMode(value)}/>}
                grandFormComponent={<NumberLinksForm
                    numberLinks={props.numberLinks}
                    exitEditMode={() => setEditMode(false)}
                    editNumberLinks={numberLinks => editNumberLinksAction(props.indexQuestion, numberLinks)}
                />}
            />
        </div>
    </div>
};

export let DisplayNumberLinks: FC<DisplayNumberLinksProps> = (props) => {
    return <div className={style.DisplayNumberLinks}>
        Количество ссылок: {props.numberLinks}
        <div className={style.editButton}>
            <EditButton
                onClickFunc={() => props.setEditMode(true)}
                size={"small"}
                iconSize={"small"}
            />
        </div>
    </div>
};

