import {createSelector} from "reselect";

//отдает большой массив с данными о направлениях, тарифах и услугах
let getNamesDirectionsSelector = (state) => {
    return state.projectCreation.directionsAndTariffs
};

//получить названия Тарифов в зависимости от выбранных направлений
export let getNamesTariffsDependingSelectedDirections = createSelector(getNamesDirectionsSelector,
    (directions) => {
        return directions
            .map(d => {
                if (d.selected) {
                    // пробегаемся по массиву направления рекламы и выдаем массив объектов в которых название тарифа и статус
                    let namesTariffs = d.tariffsNames.map(tNames => (
                        {
                            tariffName: tNames.name,
                            tariffStatus: tNames.selected
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


// функция отдает название направления и булевый статус(выбран блок или нет)

export let getNamesDirections = createSelector(getNamesDirectionsSelector, (directions) => {
    return directions.map(d => (
        {
            nameDirection: d.nameDirection,
            selected: d.selected,
            idDirection: d.idDirection
        }
    ));
});
