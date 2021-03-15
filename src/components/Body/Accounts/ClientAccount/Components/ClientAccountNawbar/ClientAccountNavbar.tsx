import React, {FC, ReactNodeArray, useEffect, useState} from "react";
import style from "./ClientAccountNavbar.module.scss";
import List from "@material-ui/core/List";
import {ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ClientAccountNavBarProps, ListItemComponentProps} from "../../Types/ClientAccountNavbarTypes";
import {
    LinkClientAccountBody,
    ProjectTabData
} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {ClientAccountPages} from "../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {useSelector} from "react-redux";
import {getSelectedProjectsSelector} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";
import {ListItemProject, ListItemProjects} from "./Components/ListItemProjects/ListItemProjects";
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FeedbackIcon from '@material-ui/icons/Feedback';

export let ClientAccountNavBar: FC<ClientAccountNavBarProps> = (props) => {
    const selectedProjects = useSelector(getSelectedProjectsSelector);
    const iconItemsArray: ReactNodeArray = [
        <AmpStoriesIcon/>, <SettingsIcon/>, <LibraryBooksIcon/>, <FeedbackIcon/>,
    ];

    const generateLinkClientAccountProjects = (projectId: string, projectName: string): string => `projects?id=${projectId}&projectName=${projectName}`;


    // Динамическое изменение списка открытых вкладок с проектами. На выходе имеем массив элементов ListItem без null
    const [projectsTabs, editProjectsTabs] = useState<ReactNodeArray>([]);
    useEffect(() => {
        const linksToProjects = selectedProjects.map((project: ProjectTabData | null, index) => {
            return project
                ? <ListItemProject
                    key={project.idProjectTab}
                    index={index}
                    project={project}
                    currentProjectIndex={props.currentProjectIndex}
                    updateCurrentProjectIndex={index1 => props.updateCurrentProjectIndex(index1)}
                    updateIndexMainLinkToProjects={() => props.updateIndexMainLinkAction(0)}
                    link={generateLinkClientAccountProjects(
                        project && project.projectId,
                        project && project.projectName
                    )}
                />
                : null
        }).filter(item => item);

        editProjectsTabs(linksToProjects);
    }, [selectedProjects, props]);

    /*
        Список элементов боковой панели. Если ссылка не на проекты, либо количество выбранных проектов < 1,
        то отдаем простой элемент списка. В противном случае отдаем элемент списка с вложенным списком
        открытых проектов.
    */
    const listItems = props.linksClientAccount.map((linkData: LinkClientAccountBody, index) => {
        if (linkData.link !== ClientAccountPages.Projects || projectsTabs.length === 0) {
            return <ListItemComponent
                index={index}
                key={linkData.link}
                link={linkData.link}
                linkText={linkData.linkName}
                indexMainLink={props.indexMainLink}
                itemIcon={iconItemsArray[index]}
                editIndexMainLink={index1 => props.updateIndexMainLinkAction(index1)}
            />
        } else {
            return <ListItemProjects
                key={linkData.link}
                index={index}
                linkData={linkData}
                projectsTabs={projectsTabs}
                indexMainLink={props.indexMainLink}
                projectsViewed={props.projectsViewed}
                currentProjectIndex={props.currentProjectIndex}
                projectIcon={iconItemsArray[0]}
                editIndexMainLink={index1 => props.updateIndexMainLinkAction(index1)}
            />
        }
    });

    return <Paper className={style.ClientAccountNavBar}>
        <List component={'div'}>
            {listItems}
        </List>
    </Paper>
};

// Простой элемент списка боковой панели
export let ListItemComponent: FC<ListItemComponentProps> = (props) => {
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



