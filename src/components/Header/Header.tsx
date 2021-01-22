import React from 'react';
import style from './Header.module.scss'
import Drawer from '@material-ui/core/Drawer';
import NawBar from "./Nawbar/Nawbar";
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";

let Header = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor: 'left', open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({[anchor]: open});
    };

    const list = (anchor: 'left') => (
        <div
            className={style.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <NawBar/>
        </div>
    );

    return <div className={style.headerContainer}>
        <IconButton color={"default"} onClick={toggleDrawer('left', true)}>
            <MenuIcon htmlColor={"#ffffff"}/>
        </IconButton>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
        </Drawer>
    </div>;
};

export default Header



