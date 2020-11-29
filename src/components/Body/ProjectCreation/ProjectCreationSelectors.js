import {createSelector} from "reselect";

let Directions = {
    // Отдает сумму по параметру
    getTotalPrice(items, param) {
        return items
            .map(item => item[param])
            .reduce((sum, current) => sum + current, 0);
    },

    // Отдает большой объект со всей информацией
    getNamesDirectionsSelector(state) {
        return state.projectCreation.directionsAndTariffs
    },

    // Отдает массив объектов с информацией о направлениях, в каждом из которых лежит массив с информацией о тарифах
    getNamesDirectionsFunc(directions, getNamesTariffs) {
        return directions
            .map(d => {
                if (d.selected) {
                    // пробегаемся по массиву направления рекламы и выдаем массив объектов в которых название тарифа и статус
                    let namesTariffs = getNamesTariffs(d);
                    let direction = {
                        nameDirection: d.nameDirection,
                        idDirection: d.idDirection,
                        paymentInFull: d.paymentInFull,
                        namesTariffs
                    };
                    // если есть тариф и в нем присутствует свойство deadline, то возвращаем также итоговую цену направления
                    return namesTariffs.length > 0 && namesTariffs[0].deadline
                        ? {...direction, directionTotalPrice: Directions.getTotalPrice(namesTariffs, 'totalPrice')}
                        : direction
                }
                return null
            })
            // фильтруем элементы null, потому что метод map возвращает массив той же длинны, что и получает
            .filter(item => item !== null)
    },

    // Отдает массив объектов с информацией о тарифах
    getNamesTariffsForTariffs(direction) {
        return direction.namesTariffs.map(tNames => (
            {
                tariffName: tNames.tariffName,
                tariffStatus: tNames.tariffStatus,
                tariffId: tNames.tariffId
            }
        ));
    },

    // Отдает массив объектов с информацией о тарифах, в каждом из которых лежит массив объектов с информацией о услугах
    getNamesTariffsForServices(direction) {
        return direction.namesTariffs.map(tNames => {
            if (tNames.tariffStatus) {
                // пробегаемся по массиву тарифа и выдаем массив объектов в которых название услуги и статус
                let namesServices = Directions.getServiceInformationForServices(tNames);
                let servicesCost = Directions.getTotalPrice(tNames.services, 'servicePrice');
                // отдаем наверх массив объектов, в котором массив с именами услуг и название тарифа
                return {
                    tariffName: tNames.tariffName,
                    tariffStatus: tNames.selected,
                    tariffId: tNames.tariffId,
                    packetPrice: tNames.packetPrice,
                    deadline: tNames.deadline,
                    paymentPackage: tNames.paymentPackage,
                    totalPrice: tNames.paymentPackage ? tNames.packetPrice : servicesCost,
                    namesServices
                }
            }
            return null
        }).filter(item => item !== null);
    },

    // Отдает массив объектов объектов с информацией о услугах
    getServiceInformationForServices(tariffName) {
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
export let getNameProjectSelector = (state) => {
    return state.projectCreation.nameProject
};

// Отдает массив контактов клиента
export let getClientContactsSelector = (state) => {
    return state.projectCreation.clientContacts
};



export let getNamesDirections = createSelector(Directions.getNamesDirectionsSelector, (directions) => {
    return directions.map(d => (
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





