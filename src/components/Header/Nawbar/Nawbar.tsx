import React from 'react';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List";
import {NavBarLinks} from "../../../AppGlobalTypes/TypesComponents";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';


let NawBar = () => {
    return <List>
        <ListItem button component={Link} to={NavBarLinks.admin}>
            <ListItemIcon> <SupervisorAccountIcon/> </ListItemIcon>
            <ListItemText primary={'Панель администратора'}/>
        </ListItem>
        <ListItem button component={Link} to={NavBarLinks.prCreation}>
            <ListItemIcon> <AssignmentTurnedInIcon/> </ListItemIcon>
            <ListItemText primary={'Создание проекта'}/>
        </ListItem>
        <ListItem button component={Link} to={NavBarLinks.editTariffsData}>
            <ListItemIcon> <AccountTreeIcon/> </ListItemIcon>
            <ListItemText primary={'Редактирование тарифов'}/>
        </ListItem>
    </List>
};

export default NawBar