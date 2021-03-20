import React, {FC} from "react";
import {TabLabelProps} from "../../Types/TabLabel.types";
import style from "../../TabsComponent.module.scss";
import {ClearButton} from "../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {Typography} from "@material-ui/core";
import {ProjectStatusIndicator} from "../../../../../../../../AppGlobal/AppGlobalComponents/ProjectStatusIndicator/ProjectStatusIndicator";

export const TabLabel: FC<TabLabelProps> = ({currentProjectIndex, indexTab, ...props}) => {
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
        <ProjectStatusIndicator projectStatus={props.projectStatus}/>
        <Typography className={style.tabTitle} component={'div'} variant={"body1"}
                    onClick={() => props.updateCurrentProjectIndex(indexTab)}
        >
            {props.projectName || 'Новая вкладка'}
        </Typography>
        <div className={style.clearButton}>{clearButton}</div>
    </div>
};



