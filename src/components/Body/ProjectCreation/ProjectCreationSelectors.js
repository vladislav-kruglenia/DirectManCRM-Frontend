import {createSelector} from "reselect";

let Directions = {


    // Отдает сумму всех услуг, влюченных в тариф
    getTariffPrice(services) {
        return services
            .map(service => service.servicePrice)
            .reduce((sum, current) => {
                return current === null ? null : sum + current
            }, 0);
    },

    // Отдает сумму всех услуг, влюченных в тариф
    getDirectionPrice(tariffs) {
        return tariffs
            .map(tariff => tariff.totalPrice)
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
                        namesTariffs
                    };
                    // если есть тариф и в нем присутствует свойство deadline, то возвращаем также итоговую цену направления
                    return namesTariffs.length > 0 && namesTariffs[0].deadline
                        ? {...direction, directionTotalPrice: Directions.getDirectionPrice(namesTariffs)}
                        : direction
                }
                return null
            })
            // фильтруем элементы null, потому что метод map возвращает массив той же длинны, что и получает
            .filter(item => item !== null)
    },

    // Отдает массив объектов с информацией о тарифах
    getNamesTariffsForTariffs(direction) {
        return direction.tariffsNames.map(tNames => (
            {
                tariffName: tNames.name,
                tariffStatus: tNames.selected,
                tariffId: tNames.id
            }
        ));
    },

    // Отдает массив объектов с информацией о тарифах, в каждом из которых лежит массив объектов с информацией о услугах
    getNamesTariffsForServices(direction) {
        return direction.tariffsNames.map(tNames => {
            if (tNames.selected) {
                // пробегаемся по массиву тарифа и выдаем массив объектов в которых название услуги и статус
                let namesServices = Directions.getServiceInformationForServices(tNames);
                let servicesCost = Directions.getTariffPrice(tNames.services);
                // отдаем наверх массив объектов, в котором массив с именами услуг и название тарифа
                return {
                    tariffName: tNames.name,
                    tariffStatus: tNames.selected,
                    tariffId: tNames.id,
                    packetPrice: tNames.packetPrice,
                    deadline: tNames.periodOfExecution,
                    paymentPackage: tNames.paymentAPackageServices,
                    totalPrice: tNames.paymentAPackageServices ? tNames.packetPrice : servicesCost,
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
                serviceStatus: sNames.selected,
                serviceId: sNames.idService,
                servicePrice: sNames.servicePrice
            }
        ));
    },
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





