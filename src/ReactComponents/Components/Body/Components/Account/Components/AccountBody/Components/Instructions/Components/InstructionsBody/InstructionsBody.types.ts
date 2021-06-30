import {InstructionButtonsFuncTypes} from "../Instruction/Components/InstructionHeader/Components/InstructionButtonsBody/InstructionButtonsBody.types";
import {EditTextFuncType} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/Types/OneInputTextTypes";
import {InstructionTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalTypes/InstructionsGlobal.types";

export type InstructionsBodyProps = {
    instructionButtons: InstructionButtonsFuncTypes,
    isReadOnly: boolean,
    editInstructionText: EditTextFuncType,
}

export type InstructionMainData = {
    typeInstructions: InstructionTypeEnum,
    instructionId: string,
    instructionText: string,
}