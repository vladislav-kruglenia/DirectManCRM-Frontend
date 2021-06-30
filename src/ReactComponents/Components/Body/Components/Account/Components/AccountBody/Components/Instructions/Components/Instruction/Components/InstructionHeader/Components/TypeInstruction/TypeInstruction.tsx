import React, {FC} from "react";
import style from "./TypeInstruction.module.scss"
import {NativeSelectComponent} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";
import {
    InstructionTypeEnum,
    InstructionTypeNameEnum
} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/InstructionsGlobal.types";
import {TypeInstructionProps} from "./TypeInstruction.types";

export const TypeInstruction:FC<TypeInstructionProps> = (props) => {
    const {typeInstruction} = props;

    const OptionArr = [
        <option key={InstructionTypeEnum.Client} value={InstructionTypeEnum.Client}>
            {InstructionTypeNameEnum[InstructionTypeEnum.Client]}
        </option>,
        <option key={InstructionTypeEnum.Executor} value={InstructionTypeEnum.Executor}>
            {InstructionTypeNameEnum[InstructionTypeEnum.Executor]}
        </option>,
    ];

    return <div className={style.TypeInstruction}>
        <NativeSelectComponent
            labelText={"Тип инструкции"}
            errorText={"Тип инструкции не выбран"}
            editOptionValue={() => {}}
            OptionsArray={OptionArr}
            optionValue={typeInstruction}
        />
    </div>
};