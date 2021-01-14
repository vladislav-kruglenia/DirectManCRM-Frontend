import React from 'react';
import {useAdminPanelStyles} from "./Styles/useAdminPanelStyles";


let AdminPanel = () => {
    const classes = useAdminPanelStyles();
    return <div className={classes.AdminContainer}>
        AdminPanel
    </div>
};

export default AdminPanel