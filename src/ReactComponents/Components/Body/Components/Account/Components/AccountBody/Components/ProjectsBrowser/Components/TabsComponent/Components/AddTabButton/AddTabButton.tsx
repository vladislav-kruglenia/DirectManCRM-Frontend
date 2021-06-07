import React, {FC, memo} from "react";
import {AddTabButtonProps} from "../../Types/TabsComponent.types";
import {AddButtonIcon} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";

export const AddTabButton: FC<AddTabButtonProps> = (props) => {
    const addButton = props.projectsViewed.length < 6
        && <AddButtonIcon iconSize={"default"} size={"small"} onClickFunc={() => {
            props.addTab();
            props.updateCurrentIndex(props.projectsViewed.length);
        }}/>;

    return <>{addButton}</>
};
export const AddTabButtonMemo = memo(AddTabButton, (pProps: AddTabButtonProps, nProps: AddTabButtonProps) => {
    return pProps.projectsViewed.length === nProps.projectsViewed.length
});