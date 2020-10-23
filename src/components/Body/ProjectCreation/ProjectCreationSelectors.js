import {createSelector} from "reselect";

let Directions = {
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
                    // отдаем наверх массив объектов, в котором массив с тарифами и название направления
                    return {
                        nameDirection: d.nameDirection,
                        idDirection: d.idDirection,
                        namesTariffs
                    }
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
    getNamesTariffsForSelectors(direction) {
        return direction.tariffsNames.map(tNames => {
            if (tNames.selected) {
                // пробегаемся по массиву тарифа и выдаем массив объектов в которых название услуги и статус
                let namesServices = Directions.getServiceInformationForSelectors(tNames);
                // отдаем наверх массив объектов, в котором массив с именами услуг и название тарифа
                return {
                    tariffName: tNames.name,
                    tariffStatus: tNames.selected,
                    tariffId: tNames.id,
                    namesServices
                }
            }
            return null
        }).filter(item => item !== null);
    },

    // Отдает массив объектов объектов с информацией о услугах
    getServiceInformationForSelectors(tariffName) {
        return tariffName.services.map(sNames => (
            {
                serviceName: sNames.serviceName,
                serviceStatus: sNames.selected,
                serviceId: sNames.idService
            }
        ));
    },
};


export let getNamesDirections = createSelector(Directions.getNamesDirectionsSelector,(directions) => {
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
        return Directions.getNamesDirectionsFunc(directions, Directions.getNamesTariffsForSelectors)});





