import React, {FC, useEffect, useState} from "react";
import style from "./Accesses.module.scss"
import styleTypesResponseBody from "../../TypesResponseBody.module.scss"
import {AddButtonText} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AccessTypeDisplay} from "./Components/AccessTypeDisplay";
import {AccessTypeForm} from "./Components/AccessTypeForm";
import {ValueDisplay} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {Typography} from "@material-ui/core";
import {
    AccessesProps,
    AccessProps,
    AddAccessType, DeleteAccess,
    EditAccessTypeAction,
    EditNameAndLinkAccessAction
} from "./Types/AccessesTypes";
import {useDispatch, useSelector} from "react-redux";
import {getAccessesTypesSelector} from "../../../../../../EditingOrderQuestionsSelectors";
import {
    editAccessType,
    editNameAndLinkAccess,
    addAccessType,
    deleteAccess
} from "../../../../../../../../../../../Redux/Reducers/EditingOrderQuestions/EditingOrderQuestions.reducer";
import {
    AddAccessTypePayload, DeleteAccessType,
    EditAccessTypePayload,
    EditNameAndLinkAccessPayload
} from "../../../../../../../../../../../Redux/Reducers/EditingOrderQuestions/Types/Actions.types";
import {NoAccessesError} from "../../../../../Errors/Errors";

export let Accesses: FC<AccessesProps> = (props) => {
    let assessesTypes = useSelector(getAccessesTypesSelector);

    let dispatch = useDispatch();

    let deleteAccessAction: DeleteAccess = (indexQuestion, indexAccess) => {
        let action: DeleteAccessType = {indexQuestion, indexAccess};
        dispatch(deleteAccess(action))
    };
    let editAccessTypeAction: EditAccessTypeAction = (indexQuestion, indexAccess, idAccess) => {
        let action: EditAccessTypePayload = {indexQuestion, indexAccess, idAccess};
        dispatch(editAccessType(action))
    };


    let editNameAndLinkAccessAction: EditNameAndLinkAccessAction = (idAccess, indexQuestion, indexAccess, accessLink, accessName) => {
        let action: EditNameAndLinkAccessPayload = {idAccess, indexQuestion, indexAccess, accessLink, accessName};
        dispatch(editNameAndLinkAccess(action))
    };

    let addAccessTypeAction: AddAccessType = (indexQuestion) => {
        let action: AddAccessTypePayload = {indexQuestion};
        dispatch(addAccessType(action))
    };


    let accessesComponentsArr = props.assessesData.length > 0
        ? props.assessesData.map((access, index) => <Access
            key={`${access.idAccess}-${index}`}
            accessData={access}
            accessTypesArr={assessesTypes}
            editAccessType={(idAccess => editAccessTypeAction(props.indexQuestion, index, idAccess))}
            editNameAndLinkAccess={(accessLink, accessName) => {
                editNameAndLinkAccessAction(access.idAccess, props.indexQuestion, index, accessLink, accessName)
            }}
            deleteAccess={() => deleteAccessAction(props.indexQuestion, index)}
        />)

        : <NoAccessesError/>;

    return <div className={style.Accesses}>
        <Typography component={'span'} variant={"body2"} className={styleTypesResponseBody.TypesResponseBodyTitle}>
            В этом поле клиенту будут отображаться формы, для заполнения логина и пароля.
            Вам нужно указать название доступа и ссылку на него:
        </Typography>
        {accessesComponentsArr}
        <AddButtonText
            buttonText={"Добавить доступ"} size={"small"} iconSize={"small"}
            onClickFunc={() => addAccessTypeAction(props.indexQuestion)}
        />
    </div>
};


export let Access: FC<AccessProps> = (props) => {
    let isChanged = props.accessData.isChanged;
    let [editMode, setEditMode] = useState(!isChanged);

    useEffect(()=>{
        setEditMode(!isChanged)
    }, [isChanged]);
    return <div className={style.Access}>
        <ValueDisplay
            type={FormTypeEnum.grandForm}
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            setEditModeInProps={(value) => setEditMode(value)}
            isNotAllowedToExitEditMode={!isChanged}
            displayComponent={<AccessTypeDisplay
                editAccessType={idAccess => props.editAccessType(idAccess)}
                accessData={props.accessData}
                accessTypesArr={props.accessTypesArr}
                openEditMode={() => setEditMode(true)}
                deleteAccess={() => props.deleteAccess()}
            />}
            grandFormComponent={<AccessTypeForm
                accessLink={props.accessData.accessLink}
                accessName={props.accessData.accessName}
                exitEditMode={() => setEditMode(false)}
                editNameAndLinkAccess={(accessLink, accessName) => props.editNameAndLinkAccess(accessLink, accessName)}
            />}
        />
    </div>
};

