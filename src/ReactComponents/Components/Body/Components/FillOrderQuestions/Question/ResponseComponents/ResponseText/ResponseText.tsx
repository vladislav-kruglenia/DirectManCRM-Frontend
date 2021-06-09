import React, {FC, useState} from "react";
import style from "./ResponseText.module.scss";
import {Typography} from "@material-ui/core";
import {DisplayResponseType, ResponseTextPropsTypes} from "../Types/ResponseTextTypes";
import {ValueDisplay} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {EditResponseForm} from "./Components/EditResponseForm/EditResponseForm";

export const ResponseText: FC<ResponseTextPropsTypes> = (props) => {
    let [editMode, setEditMode] = useState(!props.isChanged);
    if(!props.displayOnly){
        return <div>
            <ValueDisplay
                type={FormTypeEnum.grandForm}
                editModeStatus={editMode}
                displayType={DisplayTypeEnum.component}
                setEditModeInProps={value => setEditMode(value)}
                isNotAllowedToExitEditMode={!props.isChanged}
                displayComponent={<DisplayResponse
                    response={props.responseData}
                    displayOnly={false}
                    setEditMode={(value: boolean) => setEditMode(value)}
                />}
                grandFormComponent={<EditResponseForm
                    indexQuestion={props.indexQuestion}
                    response={props.responseData}
                    setEditMode={(value: boolean) => setEditMode(value)}
                    editResponseText={props.editResponseText}
                />}
            />
        </div>;
    } else {
        return <DisplayResponse
            response={props.responseData}
            displayOnly={true}
            setEditMode={(value: boolean) => setEditMode(value)}
        />
    }

};

export const DisplayResponse: FC<DisplayResponseType> = (props) => {
    return <div onDoubleClick={() => props.setEditMode(true)}>
        <Typography component={'div'} className={style.response} variant={"subtitle1"}>
            {props.response !== '' ? `${props.response}` : 'Поле не заполнено'}
        </Typography>
    </div>
};



