import {InstructionMainData} from "./InstructionsBody.types";
import {instruction1} from "../../../../../../../../../../../texts/instructions1";
import {InstructionTypeEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalTypes/InstructionsGlobal.types";
import {instruction2} from "../../../../../../../../../../../texts/instructions2";

export const InstructionsBodyData: InstructionMainData[] = [
    {
        instructionId: "1",
        instructionText: instruction1,
        typeInstructions: InstructionTypeEnum.Executor,
    },

    {
        instructionId: "2",
        instructionText: instruction2,
        typeInstructions: InstructionTypeEnum.Client,
    },

];