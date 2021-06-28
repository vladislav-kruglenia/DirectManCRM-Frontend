import React, {FC} from "react";
import style from "./DestinationsDisplay.module.scss"
import {AddDestinationButton} from "./Components/AddDestinationButton/AddDestinationButton";
import {DestinationMemo} from "./Components/Destination/Destination";
import {DestinationsDisplayProps} from "./DestinationsDisplay.types";
import {DestinationType} from "../../../../../../../../../../../../../../../Redux/Reducers/Instructions/StartState/StartState.types";
import {useInstructionsReducerActions} from "../../../../../../../../../../../../../../../Redux/Reducers/Instructions/Hooks/Actions.hooks";

export const DestinationsDisplay:FC<DestinationsDisplayProps> = (props) => {
    const {destinations} = props;
    const {deleteDestinationAction} = useInstructionsReducerActions();

    const DestinationsArr = destinations.map((item: DestinationType, index) => (
        <DestinationMemo
            key={item.destinationId}
            label={item.destinationName}
            index={index}
            onDeleteFunc={(index) => deleteDestinationAction({index})}
        />
    ));

    return <div className={style.DestinationsDisplay}>
        {DestinationsArr}
        <AddDestinationButton destinationsLength={destinations.length}/>
    </div>
};

