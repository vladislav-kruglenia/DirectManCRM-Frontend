import React, {FC, useState} from "react";
import style from "../../ClientAccountNavbar.module.scss"
import {Collapse, ListItem, ListItemText, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

import List from "@material-ui/core/List";
import {ListItemProjectProps, ListItemProjectsProps} from "./Types/ListItemProjects.types";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

export let ListItemProjects: FC<ListItemProjectsProps> = (props) => {
    const [open, setOpen] = useState(false);

    return <div>
        <ListItem button
                  selected={props.indexMainLink === props.index}
                  onClick={() => {
                      setOpen(!open);
                      props.editIndexMainLink(props.index)
                  }}
                  component={Link}
                  to={`${props.linkData.link}?id=${props.projectsViewed[props.currentProjectIndex].projectId}&projectName=${props.projectsViewed[props.currentProjectIndex].projectName}`}
        >
            {/*<BusinessCenterIcon color={"action"}/>*/}
            <ListItemText>{props.linkData.linkName}</ListItemText>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List className={style.projectsCollapse} component="div" disablePadding>
                {props.projectsTabs}
            </List>
        </Collapse>
    </div>
};


export let ListItemProject: FC<ListItemProjectProps> = (props) => {
    return <ListItem
        className={style.ListItemProject}
        selected={props.index === props.currentProjectIndex}
        onClick={() => {
            props.updateCurrentProjectIndex(props.index);
            props.updateIndexMainLinkToProjects()
        }}
        component={Link} to={props.link}
    >
        {/*<TabIcon className={style.TabIcon} fontSize={"small"} color={"action"}/>*/}
        <Typography className={style.itemTitle} component={'div'} color={"textPrimary"}>{props.project.projectName}</Typography>
    </ListItem>
};