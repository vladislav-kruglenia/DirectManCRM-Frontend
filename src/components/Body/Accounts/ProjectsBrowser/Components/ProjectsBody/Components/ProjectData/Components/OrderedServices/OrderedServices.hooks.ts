import {useCallback, useEffect, useState} from "react";
import {OrderedService} from "../../../../../../../../../../redux/AccountsReducers/ClientAccountReducer/Types/QueryTypes/ProjectInfoForClient.types";

export let useReadyServicesPercentage = (services: OrderedService[]) => {
    const getSumReadyServices = useCallback(() => {
        if (services.length === 0) return 0;

        let sumReadyServices = 0;
        services.forEach(service => {
            sumReadyServices = service.isReady ? sumReadyServices + 1 : sumReadyServices
        });

        return Math.round(sumReadyServices / services.length * 100)

    }, [services]);

    let [readyServicesPercentage, updatePercentage] = useState(getSumReadyServices());

    useEffect(() => {
        updatePercentage(getSumReadyServices())
    }, [services, getSumReadyServices]);

    return readyServicesPercentage
};
