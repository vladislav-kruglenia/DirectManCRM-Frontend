import {createSelector} from "reselect";

//отдает большой массив с данными о направлениях, тарифах и услугах
let getNamesDirectionsSelector = (state) => {
    return state.projectCreation.directionsAndTariffs
};

// функция отдает название направления и булевый статус(выбран блок или нет)


//получить названия Тарифов в зависимости от выбранных направлений


export let getNamesDirections = createSelector(getNamesDirectionsSelector, (directions) => {
    return directions.map(d => (
        {
            nameDirection: d.nameDirection,
            selected: d.selected,
            idDirection: d.idDirection
        }
    ));
});

export let getNamesTariffsDependingSelectedDirections = createSelector(getNamesDirectionsSelector,
    (directions) => {
        return directions
            .map(d => {
                if (d.selected) {
                    // пробегаемся по массиву направления рекламы и выдаем массив объектов в которых название тарифа и статус
                    let namesTariffs = d.tariffsNames.map(tNames => (
                        {
                            tariffName: tNames.name,
                            tariffStatus: tNames.selected,
                            tariffId: tNames.id
                        }
                    ));
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
    });

export let getNamesServicesDependingSelectedTariffs = createSelector(getNamesDirectionsSelector,
    (directions) => {
        return directions
            .map(d => {
                if (d.selected) {
                    // пробегаемся по массиву направления рекламы и выдаем массив объектов в которых название тарифа и статус
                    let namesTariffs = d.tariffsNames.map(tNames => {
                        if(tNames.selected){
                            // пробегаемся по массиву тарифа и выдаем массив объектов в которых название услуги и статус
                            let namesServices = tNames.services.map(sNames => (
                                {
                                    serviceName: sNames.serviceName,
                                    serviceStatus: sNames.selected,
                                    serviceId: sNames.idService
                                }
                            ));
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
    });


