import React from "react";
import {InstructionButtonsFuncTypes} from "./Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {InstructionHeader} from "./Components/InstructionHeader/InstructionHeader";
import {InstructionDisplay} from "./Components/InstructionDisplay/InstructionDisplay";
import {ValueDisplay} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {FormInstruction} from "./Components/FormInstruction/FormInstruction";
import {UseInstructionComponentsDTO} from "./Instruction.types";

export const useInstructionHeaderComponent = (dto: UseInstructionComponentsDTO) => {
    const {isReadOnly, instructionButtons, setEditMode} = dto;

    const instructionButtonsFunc: InstructionButtonsFuncTypes = {
        ...instructionButtons,
        editInstruction: () => setEditMode(true)
    };
    const InstructionHeaderComponent = !isReadOnly && <InstructionHeader instructionButtons={instructionButtonsFunc}/>;

    return {InstructionHeaderComponent}
};

export const useInstructionBodyComponent = (dto: UseInstructionComponentsDTO) => {
    const {isReadOnly, instructionText, setEditMode, editMode, editInstructionText} = dto;

    const InstructionDisplayComponent = <InstructionDisplay instructionText={instructionText}/>;

    const InstructionBodyComponent = isReadOnly
        ? InstructionDisplayComponent
        : <ValueDisplay
            editModeStatus={editMode}
            displayType={DisplayTypeEnum.component}
            type={FormTypeEnum.grandForm}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={InstructionDisplayComponent}
            grandFormComponent={
                <FormInstruction
                    editText={editInstructionText}
                    exitEditMode={() => setEditMode(false)}
                    instructionText={instructionText}
                />
            }
        />;

    return {InstructionBodyComponent}
};

