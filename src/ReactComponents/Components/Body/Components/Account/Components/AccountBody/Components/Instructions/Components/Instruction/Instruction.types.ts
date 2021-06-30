import {InstructionButtonsFuncTypes} from "./Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {EditTextFuncType} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/Types/OneInputTextTypes";
import {InstructionMainData} from "../InstructionsBody/InstructionsBody.types";

export type InstructionProps = {
    instructionMainData: InstructionMainData,
    instructionButtons: InstructionButtonsFuncTypes,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,
}

export interface UseInstructionHeaderComponentsDTO extends EditModeParams{
    instructionMainData: InstructionMainData,
    instructionButtons: InstructionButtonsFuncTypes,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,
}

export interface UseInstructionBodyComponentDTO extends EditModeParams{
    instructionMainData: InstructionMainData,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,

}

export type EditModeParams = {
    editMode: boolean,
    setEditMode: (value: boolean) => void,
}

