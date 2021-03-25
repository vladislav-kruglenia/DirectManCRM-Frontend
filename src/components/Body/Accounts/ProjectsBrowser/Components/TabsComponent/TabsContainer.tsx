import style from "./TabsComponent.module.scss";
import React, {FC, memo, useCallback} from "react";
import {Tab, Tabs} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {
    DeleteTabPayload,
    ProjectTabData
} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {deleteTab} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer";
import {TabsComponentProps} from "./Types/TabsComponent.types";
import {getCurrentProjectIndexSelector} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";
import {TabLabelMemo} from "./Components/TabLabel/TabLabel";
import {AddTabButtonMemo} from "./Components/AddTabButton/AddTabButton";

export let TabsContainer: FC<TabsComponentProps> = (props) => {
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);

    const dispatch = useDispatch();
    const deleteTabAction = useCallback((payload: DeleteTabPayload) => {
            return dispatch(deleteTab(payload))
        }, [dispatch]);

    const tabsArray = props.projectsViewed.map((projectInfo: ProjectTabData, index) => <Tab
        key={`${projectInfo.idProjectTab}`}
        // focusRipple={index === currentIndex}
        label={<TabLabelMemo
            projectsArrayLength={props.projectsViewed.length}
            indexTab={index}
            projectInfo={projectInfo}
            isOtherTabs={props.projectsViewed.length > 1}
            currentProjectIndex={currentProjectIndex}
            updateCurrentProjectIndex={props.updateCurrentIndex}
            onDeleteTab={deleteTabAction}
        />}
    />);

    return <div className={style.TabsComponent}>
        <Tabs
            component={'div'}
            value={currentProjectIndex}
            indicatorColor="primary"
            textColor="primary"
            // variant="scrollable"
            // scrollButtons="auto"
        >
            {tabsArray}
        </Tabs>
        <AddTabButtonMemo
            projectsViewed={props.projectsViewed}
            addTab={props.addTab}
            updateCurrentIndex={index => props.updateCurrentIndex(index)}
        />
    </div>
};

export const TabsComponentMemo = memo(TabsContainer);




