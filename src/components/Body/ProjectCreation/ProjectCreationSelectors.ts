import {createSelector} from "reselect";
import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/AppGlobalTypes";
import {
    DirectionOrderType,
    DirectionType,
    ServicesType,
    TariffsInfoType,
    TariffsOrderType, TariffsType
} from "../../../api/Types/ApiTypes";
import {GetDirectionForDirection, GetTariffsForTariffs, GetTotalPriceType} from "./Types/ProjectCreationSelectorsTypes";

// TODO: Отрефакторить. Код не читабельный

let Directions = {
    // Отдает сумму по параметру
    getTotalPrice({items, param}: GetTotalPriceType) {
        return items
        //@ts-ignore // TODO @ts-ignore
            .map((item) => item[param])
            .reduce((sum: number, current: number) => sum + current, 0);
    },

    // Отдает большой массив со всей информацией
    getNamesDirectionsSelector(state: AppStateType) {
        return state.projectCreation.directionsAndTariffs
    },

    // Отдает массив объектов с информацией о направлениях, в каждом из которых лежит массив с информацией о тарифах
    getNamesDirectionsFunc(directions: TariffsInfoType, getNamesTariffs: any) {
        return directions
            .map(d => {
                if (d.selected) {
                    // пробегаемся по массиву направления рекламы и выдаем массив объектов в которых название тарифа и статус
                    let namesTariffs = getNamesTariffs(d);
                    let direction: DirectionOrderType = {
                        nameDirection: d.nameDirection,
                        idDirection: d.idDirection,
                        paymentInFull: d.paymentInFull,
                        namesTariffs
                    };
                    // если есть тариф и в нем присутствует свойство deadline, то возвращаем также итоговую цену направления
                    return namesTariffs.length > 0 && namesTariffs[0].deadline
                        ? {
                            ...direction,
                            directionTotalPrice: Directions.getTotalPrice(
                                {
                                    items: namesTariffs,
                                    param: 'totalPrice'
                                })
                        }
                        : direction
                }
                return null
            })
            // фильтруем элементы null, потому что метод map возвращает массив той же длинны, что и получает
            .filter(item => item !== null)
    },

    // Отдает массив объектов с информацией о тарифах
    getNamesTariffsForTariffs(direction: DirectionType) {
        return direction.namesTariffs.map((tNames: TariffsType): GetTariffsForTariffs => (
            {
                tariffName: tNames.tariffName,
                tariffStatus: tNames.tariffStatus,
                tariffId: tNames.tariffId
            }
        ));
    },

    // Отдает массив объектов с информацией о тарифах, в каждом из которых лежит массив объектов с информацией о услугах
    getNamesTariffsForServices(direction: DirectionOrderType) {
        return direction.namesTariffs.map(tNames => {
            if (tNames.tariffStatus) {
                // пробегаемся по массиву тарифа и выдаем массив объектов в которых название услуги и статус
                let services = Directions.getServiceInformationForServices(tNames);
                let servicesCost = Directions.getTotalPrice({items: tNames.services, param: 'servicePrice'});

                let returnObject: TariffsOrderType = {
                    tariffName: tNames.tariffName,
                    tariffId: tNames.tariffId,
                    packetPrice: tNames.packetPrice,
                    deadline: tNames.deadline,
                    paymentPackage: tNames.paymentPackage,
                    totalPrice: tNames.paymentPackage ? tNames.packetPrice : servicesCost as number,
                    services
                };
                // отдаем наверх массив объектов, в котором массив с именами услуг и название тарифа
                return returnObject
            }
            return null
        }).filter((item: TariffsOrderType | null) => item !== null);
    },

    // Отдает массив объектов объектов с информацией о услугах
    getServiceInformationForServices(tariffName: TariffsOrderType): Array<ServicesType> {
        return tariffName.services.map(sNames => (
            {
                serviceName: sNames.serviceName,
                serviceStatus: sNames.serviceStatus,
                serviceId: sNames.serviceId,
                servicePrice: sNames.servicePrice
            }
        ));
    },
};

// Отдает имя проекта
export let getNameProjectSelector = (state: AppStateType) => {
    return state.projectCreation.nameProject
};

// Отдает массив контактов клиента
export let getClientContactsSelector = (state: AppStateType) => {
    return state.projectCreation.clientContacts
};

// Отдает ID заказчика
export let getUserIdSelector = (state: AppStateType) => {
    return state.projectCreation.userId
};

export let getDirectionsAndTariffsSelector = (state: AppStateType) => {
    return state.projectCreation.directionsAndTariffs
};


export let getNamesDirections = createSelector(Directions.getNamesDirectionsSelector,
    (directions:Array<DirectionType>): Array<GetDirectionForDirection> => {
    return directions.map((d) => (
        {
            nameDirection: d.nameDirection,
            selected: d.selected,
            idDirection: d.idDirection
        }
    ));
});

export let getNamesTariffsDependingSelectedDirections = createSelector(Directions.getNamesDirectionsSelector,
    (directions) => {
        return Directions.getNamesDirectionsFunc(directions, Directions.getNamesTariffsForTariffs)
    });

export let getNamesServicesDependingSelectedTariffs = createSelector(Directions.getNamesDirectionsSelector,
    (directions) => {
        return Directions.getNamesDirectionsFunc(directions, Directions.getNamesTariffsForServices)
    });

export let getNameProject = createSelector(getNameProjectSelector,
    (name) => {
        return name
    });

export let getClientContacts = createSelector(getClientContactsSelector,
    (contactsArray) => {
        return contactsArray
    });

export let getUserId = createSelector(getUserIdSelector,
    id => {
        return id
    });

export let getDirectionsAndTariffs = createSelector(getDirectionsAndTariffsSelector,
    directionsAndTariffs => {
        return directionsAndTariffs.map(direction => {
            return {
                ...direction,
                selected: false,
                namesTariffs: direction.namesTariffs.map(tariff => {
                    return {
                        ...tariff,
                        tariffStatus: false,
                    }
                })
            }
        })
    });





