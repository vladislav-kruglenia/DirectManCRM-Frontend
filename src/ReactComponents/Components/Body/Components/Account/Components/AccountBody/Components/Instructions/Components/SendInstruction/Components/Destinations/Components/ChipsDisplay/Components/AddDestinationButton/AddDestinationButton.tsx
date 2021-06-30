import React, {FC, useState} from "react";
import style from "./AddDestinationButton.module.scss"
import {AddDestinationButtonProps} from "./AddDestinationButton.types";
import {Button} from "@material-ui/core";
import {useInstructionsReducerActions} from "../../../../../../../../../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";
import {AddButtonIcon} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {PopUpWindow} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/PopUpWindow/PopUpWindow";
import {AddDestinationWindow} from "./Components/AddDestinationWindow/AddDestinationWindow";

export const AddDestinationButton: FC<AddDestinationButtonProps> = (props) => {
    const {destinationsLength} = props;
    const {addDestinationAction} = useInstructionsReducerActions();
    const [openMode, setOpenMode] = useState(false);

    const onClickFunc = () => {
        setOpenMode(true);
    };

    if (destinationsLength > 5) return null;

    const ButtonComponent = destinationsLength > 0
        ? <AddButtonIcon size={"small"} iconSize={"small"} onClickFunc={onClickFunc}/>
        : <Button variant={"outlined"} size={"small"} onClick={onClickFunc}>Добавить</Button>;


    return <div className={style.AddDestinationButton}>
        {ButtonComponent}
        <PopUpWindow
            title={"Выбор получателя"}
            isOpen={openMode}
            setOpenMode={(value) => setOpenMode(value)}
            PopUpComponent={
                <AddDestinationWindow
                    addNewDestination={() => addDestinationAction({})}
                    exitEditMode={() => setOpenMode(false)}
                />
            }
        />
    </div>
};

