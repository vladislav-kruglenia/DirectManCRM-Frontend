import React, {FC, memo, useCallback} from "react";
import style from "./TabsComponent.module.scss";
import {Tab, Tabs} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {
    ProjectTabData
} from "../../../../../../../../../../../Redux/Reducers/Account/Types/Account.types";
import {deleteTab} from "../../../../../../../../../../../Redux/Reducers/Account/Account.reducer";
import {TabsComponentProps} from "./Types/TabsComponent.types";
import {getCurrentProjectIndexSelector} from "../../../../../../../../../../../Redux/Reducers/Account/Account.selectors";
import {TabLabelMemo} from "./Components/TabLabel/TabLabel";
import {AddTabButtonMemo} from "./Components/AddTabButton/AddTabButton";
import {DeleteTabPayload} from "../../../../../../../../../../../Redux/Reducers/Account/Types/Actions.types";

export const TabsContainer: FC<TabsComponentProps> = (props) => {
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
            variant="scrollable"
            scrollButtons="auto"
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




