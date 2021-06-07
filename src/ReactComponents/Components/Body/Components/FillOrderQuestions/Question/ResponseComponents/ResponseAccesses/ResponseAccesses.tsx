import style from "./ResponseAccesses.module.scss";
import {Typography} from "@material-ui/core";
import React, {FC, useState} from "react";
import {EditButton} from "../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AccessesTitles, ResponseAccessesPropsType, ResponseAccessPropsType} from "../Types/ResponseAccessesTypes";
import {AdvertisingLinks} from "../../../../../../../../AppGlobal/AppGlobalTypes/InternetLinks";
import {ValueDisplay} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {DisplayResponseAccesses} from "./Components/DisplayResponseAccesses";
import {ResponseAccessesForm} from "./Components/ResponseAccessesForm";
import {NoAccessesError} from "../../../Errors/ErrorsComponents";


export let ResponseAccesses: FC<ResponseAccessesPropsType> = (props) => {

    let accesses = props.responseData.length !== 0
        ? props.responseData.map((response, index) => <ResponseAccess
            key={response.accessType}
            indexQuestion={props.indexQuestion}
            indexAccess={index}
            editResponseAccess={props.editResponseAccess}
            accessType={response.accessType}
            login={response.login}
            password={response.password}
            displayOnly={props.displayOnly}
        />)
        : <NoAccessesError/>;

    return <div className={style.ResponseAccesses}>
        {accesses}
    </div>
};

export let ResponseAccess: FC<ResponseAccessPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let dataDisplay = !props.displayOnly
        ? <>
            <ValueDisplay
                type={FormTypeEnum.grandForm}
                displayType={DisplayTypeEnum.component}
                displayComponent={<DisplayResponseAccesses type={props.accessType} login={props.login}
                                                           password={props.password}/>}
                grandFormComponent={<ResponseAccessesForm
                    accessType={props.accessType}
                    indexAccess={props.indexAccess}
                    indexQuestion={props.indexQuestion}
                    login={props.login}
                    password={props.password}
                    setEditMode={() => setEditMode(false)}
                    editResponseAccess={props.editResponseAccess}
                />}
                editModeStatus={editMode}
                setEditModeInProps={setEditMode}
            />
            <div className={style.editButtons}>
                <EditButton
                    onClickFunc={() => {
                        setEditMode(true)
                    }}
                    size={"small"}
                    iconSize={"small"}
                />
            </div>
        </>
        : <DisplayResponseAccesses
            type={props.accessType}
            login={props.login}
            password={props.password}
        />;

    return <div className={style.responseAccessContainer}>
        <Typography className={style.displayAccessTitle} variant={'h6'}>
            <a
                rel={"noopener noreferrer"}
                target={"_blank"}
                href={`${AdvertisingLinks[props.accessType]}`}>
                {AccessesTitles[props.accessType]}
            </a>
        </Typography>
        {dataDisplay}
    </div>
};


