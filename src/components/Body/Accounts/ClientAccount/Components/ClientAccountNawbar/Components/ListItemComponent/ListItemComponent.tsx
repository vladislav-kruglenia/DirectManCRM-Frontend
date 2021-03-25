// Простой элемент списка боковой панели
import React, {FC, memo} from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ListItemComponentProps} from "./ListItemComponent.types";

export const ListItemComponent: FC<ListItemComponentProps> = (props) => {
    return (
        <ListItem button
                  selected={props.indexMainLink === props.index}
                  onClick={() => {
                      props.editIndexMainLink(props.index)
                  }}
                  component={Link} to={`${props.link}`}>
            <ListItemIcon>{props.itemIcon}</ListItemIcon>
            <ListItemText>{props.linkText}</ListItemText>
        </ListItem>
    )
};
export const ListItemComponentMemo = memo(ListItemComponent/*, (pPr: ListItemComponentProps, nPr: ListItemComponentProps) =>{
    return pPr.index === nPr.index
        && pPr.indexMainLink === nPr.indexMainLink
        && pPr.itemIcon === nPr.itemIcon
        && pPr.link === nPr.link
        && pPr.linkText === nPr.linkText
}*/);