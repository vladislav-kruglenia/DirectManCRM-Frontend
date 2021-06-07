import React, {FC} from "react";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ListItemFragmentProps} from "./ListItemFragment.types";

export const ListItemFragment:FC<ListItemFragmentProps> = (props) => {
    const {link, icon, text} = props;

    return <React.Fragment>
        <ListItem button component={Link} to={link}>
            <ListItemIcon> {icon} </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    </React.Fragment>
};