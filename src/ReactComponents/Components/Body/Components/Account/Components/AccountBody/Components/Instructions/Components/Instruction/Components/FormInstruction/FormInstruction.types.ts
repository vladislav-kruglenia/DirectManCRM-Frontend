import {EditTextFuncType} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Formik/OneInputText/Types/OneInputTextTypes";

export type FormInstructionProps = {
    instructionText: string,
    exitEditMode: () => void,
    editText: EditTextFuncType,
}