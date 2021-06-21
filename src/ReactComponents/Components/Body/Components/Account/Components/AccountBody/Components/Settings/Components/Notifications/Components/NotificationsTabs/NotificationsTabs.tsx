import React, {useState} from "react";
import style from "./NotificationsTabs.module.scss"
import {Tab, Tabs} from "@material-ui/core";

export const NotificationsTabs = () => {
    const [indexCurrentTab, editCurrentTabIndex] = useState(0);

    return <div className={style.NotificationsTabs}>
        <Tabs
            className={style.tabs}
            component={'div'}
            value={indexCurrentTab}
            indicatorColor="primary"
            textColor="primary"
        >
            <Tab label={"Непрочитанные"} onClick={() => editCurrentTabIndex(0)}/>
            <Tab label={"Все"} onClick={() => editCurrentTabIndex(1)}/>
        </Tabs>
    </div>
};