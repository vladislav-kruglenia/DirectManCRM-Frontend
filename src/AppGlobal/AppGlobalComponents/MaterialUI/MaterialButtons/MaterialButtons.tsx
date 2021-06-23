import React, {FC} from "react";
import style from './MaterialButtons.module.scss';
import {Button, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {
    AddButtonIconPropsType,
    AddButtonPropsType, ClearButtonPropsType, CloneButtonPropsType,
    CopyButtonPropsType,
    DeleteButtonPropsType,
    EditButtonPropsType,
    LinkButtonPropsType,
    OutlinedButtonPropsType,
    SaveButtonPropsType
} from "./Type/MaterialButtonsTypes";
import {CopyToClipboard} from "react-copy-to-clipboard";
import LinkIcon from '@material-ui/icons/Link';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

export const DeleteButton: FC<DeleteButtonPropsType> = (props) => {
    return <IconButton size={props.size} onClick={() => props.onClickFunc()}>
        <DeleteIcon fontSize={props.iconSize}/>
    </IconButton>
};

export const AddButtonIcon: FC<AddButtonIconPropsType> = (props) => {
    return <IconButton size={props.size} onClick={() => props.onClickFunc()}>
        <AddIcon fontSize={props.iconSize}/>
    </IconButton>
};


export const ClearButton: FC<ClearButtonPropsType> = (props) => {
    return <div className={style.ClearButton} onClick={props.onClickFunc}>
        <ClearIcon color={"action"} fontSize={props.iconSize}/>
    </div>
};


export const EditButton: FC<EditButtonPropsType> = (props) => {
    return <IconButton size={props.size} onClick={() => props.onClickFunc()}>
        <EditIcon fontSize={props.iconSize}/>
    </IconButton>
};

export const LinkButton: FC<LinkButtonPropsType> = (props) => {
    return <IconButton size={props.size} href={props.link} target={"_blank"}>
        <LinkIcon fontSize={props.iconSize}/>
    </IconButton>
};


export const CopyButton: FC<CopyButtonPropsType> = (props) => {
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

export const CloneButton: FC<CloneButtonPropsType> = (props) => {
    return <>
        <IconButton size={props.size} onClick={props.onClickFunc}>
            <FileCopyIcon fontSize={props.iconSize}/>
        </IconButton>
    </>
};


export const AddButtonText: FC<AddButtonPropsType> = (props) => {
    const largeButton = props.largeButton ? props.largeButton : false;

    return <Button
        className={`${style.AddButton} ${largeButton && style.AddLargeButton}`}
        size={props.size}
        onClick={() => {
            props.onClickFunc()
        }}>
        <div className={style.icon}>
            <PlaylistAddIcon color={"action"} fontSize={props.iconSize}/>
        </div>
        <div>{props.buttonText}</div>
    </Button>
};


export const SaveButton: FC<SaveButtonPropsType> = (props) => {
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

export const OutlinedButton: FC<OutlinedButtonPropsType> = (props) => {
    return <Button variant={"outlined"}
                   color={props.color || "primary"}
                   size={props.size}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};
