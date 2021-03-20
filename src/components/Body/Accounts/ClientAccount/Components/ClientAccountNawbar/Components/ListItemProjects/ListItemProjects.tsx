import React, {FC, useState} from "react";
import style from "../../ClientAccountNavbar.module.scss"
import {Collapse, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

import List from "@material-ui/core/List";
import {ListItemProjectProps, ListItemProjectsProps} from "./Types/ListItemProjects.types";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {ProjectStatusIndicator} from "../../../../../../../../AppGlobal/AppGlobalComponents/ProjectStatusIndicator/ProjectStatusIndicator";

export let ListItemProjects: FC<ListItemProjectsProps> = (props) => {
    const [open, setOpen] = useState(false);
    const {projectName, projectId, projectStatus} = props.projectsViewed[props.currentProjectIndex];

    return <div>
        <ListItem selected={props.indexMainLink === props.index}
                  component={Link}
                  to={`${props.linkData.link}?id=${projectId}&projectName=${projectName}&projectStatus=${projectStatus}`}
        >
            <ListItemIcon>{props.projectIcon}</ListItemIcon>
            <ListItemText
                onClick={() => {
                    props.editIndexMainLink(props.index)
                }}>
                <Typography component={'span'} color={'textPrimary'}>{props.linkData.linkName}</Typography>
            </ListItemText>
            <div onClick={() => setOpen(!open)}>
                {open ? <ExpandLess color={"action"}/> : <ExpandMore color={"action"}/>}
            </div>

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
        component={Link} to={props.link}
        onClick={() => {
            props.updateCurrentProjectIndex(props.index);
            props.updateIndexMainLinkToProjects()
        }}
    >
        <ListItemIcon className={style.icon}><ProjectStatusIndicator projectStatus={props.project.projectStatus}/></ListItemIcon>
        <ListItemText>
            <Typography className={style.itemTitle} component={'div'}
                        color={"textPrimary"}>{props.project.projectName}</Typography>
        </ListItemText>
    </ListItem>
};