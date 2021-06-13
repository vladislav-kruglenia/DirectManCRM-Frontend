import {useCallback, useEffect, useState} from "react";
import {OrderedService} from "../../../../../../../../../../../../../../../../../GraphQLServer/QueryTypes/ProjectInfoForClient.types";

export let useReadyServicesPercentage = (services: OrderedService[]) => {
    const getSumReadyServices = useCallback(() => {
        const numberServices = services.length;

        if (numberServices === 0) return 0;

        let sumReadyServices = 0;
        services.forEach(service => {
            sumReadyServices = service.isReady ? sumReadyServices + 1 : sumReadyServices
        });

        return Math.round(sumReadyServices / numberServices * 100)

    }, [services]);

    const [readyServicesPercentage, updatePercentage] = useState(getSumReadyServices());

    useEffect(() => {
        updatePercentage(getSumReadyServices())
    }, [services, getSumReadyServices]);

    return readyServicesPercentage
};
