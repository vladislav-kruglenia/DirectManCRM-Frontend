const SAVE_TOKEN_AUTH = "SAVE_TOKEN_AUTH";


let startState = [
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
        selected: false,
        tariffsNames: [
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
    },
    {
        nameDirection: 'Реклама Ютуб',
        selected: false,
        tariffsNames: [
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
];

const projectCreationReducer = (state = startState, action) => {
    switch (action.type) {
        case SAVE_TOKEN_AUTH: {
            return {...state, token: action.token}
        }
        default:
            return state
    }
};

// actionCreators
export let actionCreator = (x) => {
    return {type: SAVE_TOKEN_AUTH, x}
};
// actionCreators

// thunkCreators

export let thunkCreator = () => {
    return async (dispatch) => {
        let response = {tariff: true};
        if (response.status === 200) {
            dispatch(actionCreator(response));
        }
    }
};

// thunkCreators

export default projectCreationReducer