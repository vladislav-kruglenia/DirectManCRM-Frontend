import {v4 as uuidv4} from 'uuid';


const CHANGE_DIRECTION_STATUS_PR_CREATION = "CHANGE_DIRECTION_STATUS_PR_CREATION";
const CHANGE_TARIFF_STATUS_PR_CREATION = "CHANGE_TARIFF_STATUS_PR_CREATION";
const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";


let startState = {
    directionsAndTariffs: [
        {
            nameDirection: 'Контекстная реклама',
            idDirection: 1,
            selected: false,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Тариф Микро',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Тариф Старндарт',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            selected: false,
                            idService: 2
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Тариф Максимум',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            selected: false,
                            idService: 2
                        },
                        {
                            serviceName: 'Цели в Яндекс и Гугл',
                            selected: false,
                            idService: 3
                        }
                    ]
                }
            ]
        },
        {
            nameDirection: 'Реклама в соц.сетях',
            idDirection: 2,
            selected:
                false,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Инстаграм',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'ВК',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Фейсбук',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2
                        }
                    ]
                }
            ]
        }
        ,
        {
            nameDirection: 'Реклама Ютуб',
            idDirection: 3,
            selected:
                false,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Баннерная реклама',
                    selected: false,
                    services: [
                        {
                            serviceName: 'Настройка рекламы на Ютубе',
                            selected: false,
                            idService: 1
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2
                        }
                    ]
                }
            ]
        }
    ]
};

const projectCreationReducer = (state = startState, action) => {
    switch (action.type) {
        case ADD_NEW_TARIFF_PR_CREATION: {
            let indexDirection = state.directionsAndTariffs.findIndex(e => e.idDirection === action.idDirection);
            let newState = {
                ...state,
                directionsAndTariffs: [
                    ...state.directionsAndTariffs
                ]
            };
            newState.directionsAndTariffs[indexDirection] = {
                ...state.directionsAndTariffs[indexDirection],
                tariffsNames: [
                    ...state.directionsAndTariffs[indexDirection].tariffsNames,
                    action.newTariff
                ]
            };
            return newState
        }
        case CHANGE_DIRECTION_STATUS_PR_CREATION: {
            let newState = {
                ...state,
                directionsAndTariffs: [
                    ...state.directionsAndTariffs
                ]
            };
            newState.directionsAndTariffs[action.index] = {
                ...newState.directionsAndTariffs[action.index],
                selected: action.status
            };
            return newState
        }
        case CHANGE_TARIFF_STATUS_PR_CREATION: {
            let indexDirection = state.directionsAndTariffs.findIndex(e => e.idDirection === action.idDirection);
            let indexTariff = state.directionsAndTariffs[indexDirection].tariffsNames
                .findIndex(e => e.id === action.tariffId);
            let newState = {
                ...state,
                directionsAndTariffs: [
                    ...state.directionsAndTariffs
                ]
            };
            newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff] = {
                ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff],
                selected: action.status
            };
            console.log(newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff]);
            return newState
        }
        default:
            return state
    }
};

// actionCreators
export let changeDirectionStatus = (status, index) => {
    return {type: CHANGE_DIRECTION_STATUS_PR_CREATION, status, index}
};
export let changeTariffStatus = (status, tariffId, idDirection) => {
    return {type: CHANGE_TARIFF_STATUS_PR_CREATION, status, tariffId, idDirection}
};

export let addTariff = (idDirection) => {
    let newTariff = {
        id: uuidv4(),
        name: 'Новый тариф',
        selected: true,
        services: []
    };
    return {type: ADD_NEW_TARIFF_PR_CREATION,newTariff,idDirection}
};

// actionCreators

// thunkCreators

// thunkCreators

export default projectCreationReducer