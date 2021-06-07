import React, {FC, memo, useCallback, useMemo} from "react";
import {ClearButton} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import style from "../../TabsComponent.module.scss";
import {ClearTabButtonProps} from "./ClearTabButton.types";

export const ClearTabButton: FC<ClearTabButtonProps> = ({currentProjectIndex, indexTab, ...props}) => {
    const newCurrentIndex = useMemo((): number => {
        /*Индекс выбранной вкладки уменьшается на 1 только в том случае,
        когда индекс закрываемой вкладки меньше индекса выбранной вкладки,
        либо, когда индекс выбранной вкладки равен индексу закрываемой вкладки и эта позиция последняя в списке.
        Во всех остальных случаях индекс выбранной вкладки не изменяется.*/
        return indexTab < currentProjectIndex || (indexTab === currentProjectIndex && currentProjectIndex === props.projectsArrayLength - 1)
            ? currentProjectIndex - 1
            : currentProjectIndex;
    }, [indexTab, currentProjectIndex, props.projectsArrayLength]);

    const onDeleteTab = useCallback(() => {
        props.onDeleteTab();
        props.updateCurrentProjectIndex(newCurrentIndex);
    }, [props, newCurrentIndex]);

    const clearButton = props.isOtherTabs && <ClearButton
        iconSize={"small"}
        size={"small"}
        onClickFunc={() => onDeleteTab()}
    />;

    return <div className={style.clearButton}>{clearButton}</div>
};
export const ClearTabButtonMemo = memo(ClearTabButton /*,prPr: ClearTabButtonProps, nPr: ClearTabButtonProps)=> {
    return  prPr.indexTab === nPr.indexTab
        && prPr.isOtherTabs === nPr.isOtherTabs
        && prPr.projectsArrayLength === nPr.projectsArrayLength
        && prPr.currentProjectIndex === nPr.currentProjectIndex
}*/);