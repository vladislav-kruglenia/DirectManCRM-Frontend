import {useCallback, useEffect, useState} from "react";
import {ChecklistItem} from "../CheckList/CheckList.types";

export const useReadyChecklistPercentage = (checklistItems: ChecklistItem[]) => {
    const getSumReadyServices = useCallback(() => {
        const numberServices = checklistItems.length;

        if (numberServices === 0) return 0;

        let sumReadyServices = 0;
        checklistItems.forEach(service => {
            sumReadyServices = service.isReady ? sumReadyServices + 1 : sumReadyServices
        });

        return Math.round(sumReadyServices / numberServices * 100)

    }, [checklistItems]);

    const [readyServicesPercentage, updatePercentage] = useState(getSumReadyServices());

    useEffect(() => {
        updatePercentage(getSumReadyServices())
    }, [checklistItems, getSumReadyServices]);

    return readyServicesPercentage
};
