import style from "./TabsComponent.module.scss";
import React, {FC} from "react";
import {Tab, Tabs, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    DeleteTabPayload,
    ProjectTabData
} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/ClientAccountReducerTypes";
import {
    AddButtonIcon,
    ClearButton
} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {TabLabelProps} from "./Types/TabLabel.types";
import {deleteTab} from "../../../../../../redux/AccountsReducers/ClientAccountReducer/clientAccountReducer";
import {TabsComponentProps} from "./Types/TabsComponent.types";

export let TabsComponent:FC<TabsComponentProps> = (props) => {

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
            isOtherTabs={props.projectsViewed.length > 1}
            currentProjectIndex={props.currentProjectIndex}
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
            value={props.currentProjectIndex}
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

export let TabLabel: FC<TabLabelProps> = ({currentProjectIndex, indexTab, ...props}) => {
    const onDeleteTab = () => {
        props.onDeleteTab();
        /*Индекс выбранной вкладки уменьшается на 1 только в том случае,
        когда индекс закрываемой вкладки меньше индекса выбранной вкладки,
        либо, когда индекс выбранной вкладки равен индексу закрываемой вкладки и эта позиция последняя в списке.
        Во всех остальных случаях индекс выбранной вкладки не изменяется.*/
        let newCurrentIndex = indexTab < currentProjectIndex || (indexTab === currentProjectIndex && currentProjectIndex === props.projectsArrayLength - 1)
            ? currentProjectIndex - 1
            : currentProjectIndex;

        props.updateCurrentProjectIndex(newCurrentIndex);
    };

    const clearButton = props.isOtherTabs && <ClearButton
            iconSize={"small"}
            size={"small"}
            onClickFunc={() => onDeleteTab()}
        />;

    return <div className={style.TabLabel}>
        <Typography className={style.tabTitle} component={'div'} variant={"body1"}
                    onClick={() => props.updateCurrentProjectIndex(indexTab)}
        >
            {props.projectName || 'Новая вкладка'}
        </Typography>
        <div className={style.clearButton}>{clearButton}</div>
    </div>
};


