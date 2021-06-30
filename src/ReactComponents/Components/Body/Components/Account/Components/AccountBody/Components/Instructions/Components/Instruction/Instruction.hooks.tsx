import React from "react";
import {InstructionButtonsFuncTypes} from "./Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {InstructionHeader} from "./Components/InstructionHeader/InstructionHeader";
import {InstructionDisplay} from "./Components/InstructionDisplay/InstructionDisplay";
import {ValueDisplay} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {FormInstruction} from "./Components/FormInstruction/FormInstruction";
import {UseInstructionBodyComponentDTO, UseInstructionHeaderComponentsDTO} from "./Instruction.types";

export const useInstructionHeaderComponent = (dto: UseInstructionHeaderComponentsDTO) => {
    const {isReadOnly, instructionButtons, setEditMode, instructionMainData } = dto;

    const instructionButtonsFunc: InstructionButtonsFuncTypes = {
        ...instructionButtons,
        editInstruction: () => setEditMode(true)
    };
    const InstructionHeaderComponent = !isReadOnly && <InstructionHeader
        instructionMainData={instructionMainData}
        instructionButtons={instructionButtonsFunc}
    />;

    return {InstructionHeaderComponent}
};

export const useInstructionBodyComponent = (dto: UseInstructionBodyComponentDTO) => {
    const {isReadOnly, setEditMode, editMode, editInstructionText} = dto;
    const {instructionText} = dto.instructionMainData;

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

