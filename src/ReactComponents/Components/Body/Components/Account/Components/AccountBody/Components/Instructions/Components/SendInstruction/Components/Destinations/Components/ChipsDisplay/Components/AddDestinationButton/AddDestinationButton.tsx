import React, {FC} from "react";
import style from "./AddDestinationButton.module.scss"
import {AddButtonIcon} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AddDestinationButtonProps} from "./AddDestinationButton.types";
import {Button} from "@material-ui/core";
import {useInstructionsReducerActions} from "../../../../../../../../../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";

export const AddDestinationButton:FC<AddDestinationButtonProps> = (props) => {
    const {destinationsLength} = props;
    const {addDestinationAction} = useInstructionsReducerActions();
    const onClickFunc = () => addDestinationAction({});

    if(destinationsLength > 10) return null;

    const ButtonComponent = destinationsLength > 0
        ? <AddButtonIcon size={"small"} iconSize={"small"} onClickFunc={onClickFunc}/>
        : <Button variant={"outlined"} size={"small"} onClick={onClickFunc}>Добавить</Button>;

    return <div className={style.AddDestinationButton}>
        {ButtonComponent}
    </div>
};