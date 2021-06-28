import {InstructionButtonsFuncTypes} from "../Instruction/Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {EditTextFuncType} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/Types/OneInputTextTypes";

export type InstructionsBodyProps = {
    instructionButtons: InstructionButtonsFuncTypes,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,
}