import React, {FC} from "react";
import style from './MaterialButtons.module.scss';
import {Button, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {
    AddButtonPropsType,
    CopyButtonPropsType,
    DeleteButtonPropsType,
    EditButtonPropsType,
    SaveButtonPropsType
} from "./Type/MaterialButtonsTypes";
import {CopyToClipboard} from "react-copy-to-clipboard";

export let DeleteButton: FC<DeleteButtonPropsType> = (props) => {
    return <IconButton size={props.size} onClick={() => props.onClickFunc()}>
        <DeleteIcon fontSize={props.iconSize}/>
    </IconButton>
};

export let EditButton: FC<EditButtonPropsType> = (props) => {
    return <IconButton size={props.size} onClick={() => props.onClickFunc()}>
        <EditIcon fontSize={props.iconSize}/>
    </IconButton>
};

export let CopyButton: FC<CopyButtonPropsType> = (props) => {
    return <>
        <CopyToClipboard onCopy={() => {
            props.onClickFunc()
        }}
                         text={props.copyText}>
            <IconButton size={props.size}>
                <FileCopyIcon fontSize={props.iconSize}/>
            </IconButton>
        </CopyToClipboard>
    </>
};

export let AddButton: FC<AddButtonPropsType> = (props) => {
    return <Button className={style.AddButton} size={props.size} onClick={() => {
        props.onClickFunc()
    }}>
        <div className={style.icon}>
            <PlaylistAddIcon color={"action"} fontSize={props.iconSize}/>
        </div>
        <div>{props.buttonText}</div>
    </Button>
};

export let SaveButton: FC<SaveButtonPropsType> = (props) => {
    return <Button className={style.AddButton}
                   variant={"contained"}
                   color={"primary"}
                   size={props.size}
                   disabled={props.disabled}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};
