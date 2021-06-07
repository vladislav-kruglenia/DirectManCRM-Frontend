import React from 'react';
import List from "@material-ui/core/List";
import {useListItemsFragments, useNavBarData} from "./NavBar.hooks";


const NavBar = () => {
    const navBarData = useNavBarData();
    const ListItemsFragments = useListItemsFragments(navBarData);

    return <List>
        {ListItemsFragments}
    </List>
};

export default NavBar