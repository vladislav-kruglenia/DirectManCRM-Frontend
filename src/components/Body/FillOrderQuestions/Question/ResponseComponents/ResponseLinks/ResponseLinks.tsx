import style from "./ResponseLinks.module.scss";
import React, {FC, useState} from "react";
import {ValueDisplay} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {AddButton} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {ResponseLinkPropsType, ResponseLinksPropsType} from "../Types/ResponseLinksTypes";
import {DisplayResponseLinks} from "./Components/DisplayResponseLinks";
import {ResponseLinksForm} from "./Components/ResponseLinksForm";
import {AvailableLinksError, NoLinksError} from "../../../Errors/ErrorsComponents";

export let ResponseLinks: FC<ResponseLinksPropsType> = (props) => {
    let Button = props.responseData.numberLinks > props.responseData.linksData.length
        ? <div className={style.addButton}>
            <AddButton
                size={'small'}
                iconSize={'small'}
                buttonText={'Добавить ссылку'}
                onClickFunc={() => {
                    props.responseLinksObj.addResponseLink(props.indexQuestion)
                }}
            />
        </div>
        : <AvailableLinksError numberLinks={props.responseData.numberLinks}/>;

    let Links = props.responseData.linksData.length === 0
        ? <NoLinksError/>
        : props.responseData.linksData.map((linkProduct, index) => <ResponseLink
            key={linkProduct.productName}
            indexQuestion={props.indexQuestion}
            indexLink={index}
            editLinkData={props.responseLinksObj.editResponseLink}
            deleteLinkData={props.responseLinksObj.deleteResponseLink}
            linkData={linkProduct}/>);

    return <div className={style.linksProducts}>
        <div className={style.links}>
            {Links}
        </div>
        <div className={style.addLinkButton}>
            {Button}
        </div>
    </div>
};

export let ResponseLink: FC<ResponseLinkPropsType> = (props) => {
    let [editMode, setEditMode] = useState(!props.linkData.isChanged);
    return <>
        <div className={style.linkProductContainer}>
            <ValueDisplay
                editModeStatus={editMode}
                setEditModeInProps={(value => setEditMode(value))}
                displayType={DisplayTypeEnum.component}
                type={FormTypeEnum.grandForm}
                isNotAllowedToExitEditMode={!props.linkData.isChanged}
                displayComponent={<DisplayResponseLinks
                    indexQuestion={props.indexQuestion}
                    indexLink={props.indexLink}
                    linkData={props.linkData}
                    setEditMode={(value: boolean) => setEditMode(value)}
                    deleteLinkData={props.deleteLinkData}
                />}
                grandFormComponent={<ResponseLinksForm
                    indexQuestion={props.indexQuestion}
                    indexLink={props.indexLink}
                    linkData={props.linkData}
                    editLinkData={props.editLinkData}
                    setEditMode={(value: boolean) => setEditMode(value)}
                />}
            />
        </div>

    </>

};

