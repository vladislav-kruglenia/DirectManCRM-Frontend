import {InstructionButtonsFuncTypes} from "./Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {EditTextFuncType} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/Types/OneInputTextTypes";

export type InstructionProps = {
    instructionText: string,
    instructionButtons: InstructionButtonsFuncTypes,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,
}

export interface UseInstructionComponentsDTO extends InstructionProps{
    editMode: boolean,
    setEditMode: (value: boolean) => void,
}