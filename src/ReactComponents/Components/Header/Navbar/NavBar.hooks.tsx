import React, {useMemo} from "react";
import {NavBarLinks} from "../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import {NavBarDataType} from "./Navbar.types";
import {ListItemFragment} from "./Components/ListItemFragment/ListItemFragment";

export const useNavBarData = (): NavBarDataType[] => {
    return useMemo(() => [
        {
            text: 'Панель администратора',
            icon: <SupervisorAccountIcon/>,
            link: NavBarLinks.Account
        },
        {
            text: 'Аккаунт',
            icon: <SupervisorAccountIcon/>,
            link: NavBarLinks.Account
        },
        {
            text: 'Создание проекта',
            icon: <AssignmentTurnedInIcon/>,
            link: NavBarLinks.prCreation
        },
        {
            text: 'Редактирование тарифов',
            icon: <AccountTreeIcon/>,
            link: NavBarLinks.editTariffsData
        },
        {
            text: 'Заполнение брифа',
            icon: <WorkIcon/>,
            link: NavBarLinks.FillOrderQuestions
        },
        {
            text: 'Редактирование вопросов брифа',
            icon: <WorkIcon/>,
            link: NavBarLinks.EditingOrderQuestions
        },
    ], []);
};

export const useListItemsFragments = (navBarData: NavBarDataType[]) => {
    return useMemo(() => (
        navBarData.map(navBarDataItem => {
            const {link, icon, text} = navBarDataItem;

            return <ListItemFragment
                key={text}
                link={link}
                text={text}
                icon={icon}
            />
        })
    ), [navBarData]);
};