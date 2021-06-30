import {InstructionMainData} from "../../../../../ReactComponents/Components/Body/Components/Account/Components/AccountBody/Components/Instructions/Components/InstructionsBody/InstructionsBody.types";
import {InstructionTypeEnum} from "../../../../../AppGlobal/AppGlobalTypes/InstructionsGlobal.types";

export class InstructionMainDataService {

    get instructionMainDataEmpty(): InstructionMainData{
        return {
            typeInstructions: InstructionTypeEnum.Client,
            instructionId: "",
            instructionText: "",
        }
    }

}