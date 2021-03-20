import style from "./TabsComponent.module.scss";
import React, {FC, memo} from "react";
import {Tab, Tabs} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {
    DeleteTabPayload,
    ProjectTabData
} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducer.types";
import {AddButtonIcon} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {deleteTab} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer";
import {TabsComponentProps} from "./Types/TabsComponent.types";
import {getCurrentProjectIndexSelector} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/ClientAccountSelectors";
import {TabLabel} from "./Components/TabLabel/TabLabel";

export let TabsComponent: FC<TabsComponentProps> = (props) => {
    const currentProjectIndex = useSelector(getCurrentProjectIndexSelector);

    const dispatch = useDispatch();
    const actions = {
        deleteTabAction(payload: DeleteTabPayload) {
            dispatch(deleteTab(payload))
        }
    };

    const tabsArray = props.projectsViewed.map((projectInfo: ProjectTabData, index) => <Tab
        key={`${projectInfo.idProjectTab}`}
        // focusRipple={index === currentIndex}
        label={<TabLabel
            projectsArrayLength={props.projectsViewed.length}
            indexTab={index}
            projectName={projectInfo.projectName}
            projectStatus={projectInfo.projectStatus}
            isOtherTabs={props.projectsViewed.length > 1}
            currentProjectIndex={currentProjectIndex}
            updateCurrentProjectIndex={value => props.updateCurrentIndex(value)}
            onDeleteTab={() => actions.deleteTabAction({projectId: projectInfo.projectId})}
        />}
    />);

    const addButton = props.projectsViewed.length < 6
        && <AddButtonIcon iconSize={"default"} size={"small"} onClickFunc={() => {
            props.addTab();
            props.updateCurrentIndex(props.projectsViewed.length);
        }}/>;

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
        {addButton}
    </div>
};

export const TabsComponentMemo = memo(TabsComponent,
    (prevProps, nextProps) => prevProps.projectsViewed === nextProps.projectsViewed);



