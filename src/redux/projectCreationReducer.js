const CHANGE_DIRECTION_STATUS = "CHANGE_DIRECTION_STATUS";


let startState = {
        directionsAndTariffs: [
            {
                nameDirection: 'Контекстная реклама',
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
        case CHANGE_DIRECTION_STATUS: {
            let newState = {
                ...state,
                directionsAndTariffs: [
                    ...state.directionsAndTariffs
                ]
            };
            newState.directionsAndTariffs[action.index].selected = action.status;
            return newState
        }
        default:
            return state
    }
};

// actionCreators
export let changeDirectionStatus = (status, index) => {
    return {type: CHANGE_DIRECTION_STATUS, status, index}
};
// actionCreators

// thunkCreators

// thunkCreators

export default projectCreationReducer