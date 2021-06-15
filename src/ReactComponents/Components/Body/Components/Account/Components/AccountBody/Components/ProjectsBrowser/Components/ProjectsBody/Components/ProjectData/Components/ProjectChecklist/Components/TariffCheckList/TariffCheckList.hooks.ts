import {ChecklistItem} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/CheckList/CheckList.types";
import {OrderedService} from "../../../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";

export const useChecklistItems = (servicesArr: OrderedService[]): ChecklistItem[] => {
    return servicesArr.map<ChecklistItem>((item: OrderedService) => {
        const {isReady, serviceName} = item;
        return {isReady, itemName: serviceName}
    });
};