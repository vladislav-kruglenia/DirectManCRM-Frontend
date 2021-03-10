import React, {FC, useState} from "react";
import {Collapse, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";

import List from "@material-ui/core/List";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {ListItemProjectProps, ListItemProjectsProps} from "./Types/ListItemProjects.types";

export let ListItemProjects: FC<ListItemProjectsProps> = (props) => {
    const [open, setOpen] = useState(false);

    return <div key={props.linkData.link}>
        <ListItem button
                  selected={props.indexMainLink === props.index}
                  onClick={() => {
                      setOpen(!open);
                      props.editIndexMainLink(props.index)
                  }}
                  component={Link}
                  to={`${props.linkData.link}?id=${props.projectsViewed[props.currentProjectIndex].projectId}&projectName=${props.projectsViewed[props.currentProjectIndex].projectName}`}>
            <ListItemText>{props.linkData.linkName}</ListItemText>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {props.projectsTabs}
            </List>
        </Collapse>
    </div>
};


export let ListItemProject: FC<ListItemProjectProps> = (props) => {
    return <ListItem
        selected={props.index === props.currentProjectIndex}
        onClick={() => {
            props.updateCurrentProjectIndex(props.index);
            props.updateIndexMainLinkToProjects()
        }}
        component={Link} to={props.link}
    >
        {props.project.projectName}
    </ListItem>
};