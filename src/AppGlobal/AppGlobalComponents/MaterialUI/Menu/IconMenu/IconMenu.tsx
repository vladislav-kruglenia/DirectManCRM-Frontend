import React, {FC} from "react";
import {IconButton, Menu} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {MenuItemFragment} from "./Components/MenuItemFragment/MenuItemFragment";
import {IconMenuProps, MenuItem} from "./IconMenu.types";

const ITEM_HEIGHT = 48;

export const IconMenu: FC<IconMenuProps> = (props) => {
    const {menuItemsArr} = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const menuItems = menuItemsArr.map((item: MenuItem) => (
        <MenuItemFragment
            key={item.text}
            menuItem={item}
            exitEditMode={handleClose}
        />
    ));

    return <div>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon/>
        </IconButton>

        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '25ch',
                },
            }}
        >
            {menuItems}
        </Menu>
    </div>
};



