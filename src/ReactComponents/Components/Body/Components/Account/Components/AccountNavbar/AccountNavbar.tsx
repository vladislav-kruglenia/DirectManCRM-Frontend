import React, {FC, memo, ReactNodeArray, useCallback, useEffect, useMemo, useState} from "react";
import style from "./AccountNavbar.module.scss";
import List from "@material-ui/core/List";
import {Paper} from "@material-ui/core";
import {ClientAccountNavBarProps} from "../../Types/ClientAccountNavbarTypes";
import {AccountPages} from "../../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {useSelector} from "react-redux";
import {getSelectedProjectsSelector} from "../../../../../../../Redux/Reducers/Account/Account.selectors";
import {ListItemProjectMemo, ListItemProjectsMemo} from "./Components/ListItemProjects/ListItemProjects";
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FeedbackIcon from '@material-ui/icons/Feedback';
import {ListItemComponentMemo} from "./Components/ListItemComponent/ListItemComponent";
import {LinkClientAccountBody, ProjectTabData} from "../../../../../../../Redux/Reducers/Account/Types/Account.types";

export let AccountNavbar: FC<ClientAccountNavBarProps> = ({linksClientAccount, ...props}) => {
    const {updateIndexMainLinkAction} = props;
    const selectedProjects = useSelector(getSelectedProjectsSelector);

    const iconItemsArray = useMemo((): ReactNodeArray => [
        <AmpStoriesIcon/>, <SettingsIcon/>, <LibraryBooksIcon/>, <FeedbackIcon/>,
    ], []);

    const updateIndexMainLinkToProjects = useCallback(() => updateIndexMainLinkAction(0),
        [updateIndexMainLinkAction]
    );

    const linksToProjects = useMemo(() => {
        return selectedProjects.map((project: ProjectTabData | null, index) => {
            return project
                ? <ListItemProjectMemo
                    key={project.idProjectTab}
                    index={index}
                    project={project}
                    isSelected={index === props.currentProjectIndex}
                    updateCurrentProjectIndex={props.updateCurrentProjectIndex}
                    updateIndexMainLinkToProjects={updateIndexMainLinkToProjects}
                />
                : null
        }).filter(item => item);
    }, [selectedProjects, props.currentProjectIndex, props.updateCurrentProjectIndex, updateIndexMainLinkToProjects]);


    // Динамическое изменение списка открытых вкладок с проектами. На выходе имеем массив элементов ListItem без null
    const [projectsTabs, editProjectsTabs] = useState<ReactNodeArray>([]);
    useEffect(() => {
        editProjectsTabs(linksToProjects);
    }, [linksToProjects]);

    /*
        Список элементов боковой панели. Если ссылка не на проекты, либо количество выбранных проектов < 1,
        то отдаем простой элемент списка. В противном случае отдаем элемент списка с вложенным списком
        открытых проектов.
    */
    const listItems = useMemo(() => {
        return linksClientAccount.map((linkData: LinkClientAccountBody, index) => {
            if (linkData.link !== AccountPages.Projects || projectsTabs.length === 0) {
                return <ListItemComponentMemo
                    index={index}
                    key={linkData.link}
                    link={linkData.link}
                    linkText={linkData.linkName}
                    indexMainLink={props.indexMainLink}
                    itemIcon={iconItemsArray[index]}
                    editIndexMainLink={props.updateIndexMainLinkAction}
                />
            } else {
                return <ListItemProjectsMemo
                    key={linkData.link}
                    index={index}
                    linkData={linkData}
                    projectsTabs={projectsTabs}
                    indexMainLink={props.indexMainLink}
                    projectsViewed={props.projectsViewed}
                    currentProjectIndex={props.currentProjectIndex}
                    projectIcon={iconItemsArray[0]}
                    editIndexMainLink={props.updateIndexMainLinkAction}
                />
            }
        });
    }, [iconItemsArray, linksClientAccount, projectsTabs, props.currentProjectIndex, props.indexMainLink, props.projectsViewed,
        props.updateIndexMainLinkAction
    ]);

    return <Paper className={style.ClientAccountNavBar}>
        <List component={'div'}>
            {listItems}
        </List>
    </Paper>
};


export const AccountNavBarMemo = memo(AccountNavbar);



