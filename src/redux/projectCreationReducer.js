const CHANGE_DIRECTION_STATUS_PR_CREATION = "CHANGE_DIRECTION_STATUS_PR_CREATION";
const CHANGE_TARIFF_STATUS_PR_CREATION = "CHANGE_TARIFF_STATUS_PR_CREATION";


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
                                selected: false
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
                                selected: false
                            },
                            {
                                serviceName: 'Гугл Поиск',
                                selected: false
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
                                selected: false
                            },
                            {
                                serviceName: 'Гугл Поиск',
                                selected: false
                            },
                            {
                                serviceName: 'Цели в Яндекс и Гугл',
                                selected: false
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
                tariffsNames:
                    [
                        {
                            id: 1,
                            name: 'Инстаграм',
                            selected: false,
                            services: [
                                {
                                    serviceName: 'Настройка таргет рекламы',
                                    selected: false
                                },
                                {
                                    serviceName: 'Ведение 5 раб. дней',
                                    selected: false
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
                                    selected: false
                                },
                                {
                                    serviceName: 'Ведение 5 раб. дней',
                                    selected: false
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
                                    selected: false
                                },
                                {
                                    serviceName: 'Ведение 5 раб. дней',
                                    selected: false
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
                tariffsNames:
                    [
                        {
                            id: 1,
                            name: 'Баннерная реклама',
                            selected: false,
                            services: [
                                {
                                    serviceName: 'Настройка рекламы на Ютубе',
                                    selected: false
                                },
                                {
                                    serviceName: 'Ведение 5 раб. дней',
                                    selected: false
                                }
                            ]
                        }
                    ]
            }
        ]
    }
;

const projectCreationReducer = (state = startState, action) => {
    switch (action.type) {
        case CHANGE_DIRECTION_STATUS_PR_CREATION: {
            let newState = {
                ...state,
                directionsAndTariffs: [
                    ...state.directionsAndTariffs
                ]
            };
            newState.directionsAndTariffs[action.index] = {
                ...newState.directionsAndTariffs[action.index],
                selected:action.status
            };
            return newState
        }
        case CHANGE_TARIFF_STATUS_PR_CREATION: {
            let indexDirection = state.directionsAndTariffs.findIndex(e=>e.idDirection === action.idDirection);
            let indexTariff = state.directionsAndTariffs[indexDirection].tariffsNames
                .findIndex(e=>e.id === action.indexTariff + 1);
            debugger
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
export let changeTariffStatus = (status, indexTariff, idDirection) => {
    return {type: CHANGE_TARIFF_STATUS_PR_CREATION, status, indexTariff, idDirection}
};

// actionCreators

// thunkCreators

// thunkCreators

export default projectCreationReducer