import React, {FC, memo, useCallback} from "react";
import {TabLabelProps} from "../../Types/TabLabel.types";
import style from "../../TabsComponent.module.scss";
import {Typography} from "@material-ui/core";
import {ProjectStatusIndicatorMemo} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/ProjectStatusIndicator/ProjectStatusIndicator";
import {ClearTabButtonMemo} from "../ClearTabButton/ClearTabButton";

export const TabLabel: FC<TabLabelProps> = ({currentProjectIndex, indexTab, ...props}) => {
    const {projectId, projectStatus, projectName} = props.projectInfo;

    const onDeleteTab = useCallback(() => props.onDeleteTab({projectId}), [props, projectId]);

    return <div className={style.TabLabel}>
        <ProjectStatusIndicatorMemo projectStatus={projectStatus}/>
        <Typography className={style.tabTitle} component={'div'} variant={"body1"}
                    onClick={() => props.updateCurrentProjectIndex(indexTab)}
        >
            {projectName || 'Новая вкладка'}
        </Typography>
        <ClearTabButtonMemo
            indexTab={indexTab}
            currentProjectIndex={currentProjectIndex}
            projectsArrayLength={props.projectsArrayLength}
            isOtherTabs={props.isOtherTabs}
            updateCurrentProjectIndex={props.updateCurrentProjectIndex}
            onDeleteTab={onDeleteTab}
        />
    </div>
};

export const TabLabelMemo = memo(TabLabel);




