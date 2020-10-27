import {v4 as uuidv4} from 'uuid';


const CHANGE_DIRECTION_STATUS_PR_CREATION = "CHANGE_DIRECTION_STATUS_PR_CREATION";
const CHANGE_TARIFF_STATUS_PR_CREATION = "CHANGE_TARIFF_STATUS_PR_CREATION";
const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";
const ADD_NEW_SERVICE_PR_CREATION = "ADD_NEW_SERVICE_PR_CREATION";
const DELETE_SERVICE_PR_CREATION = "DELETE_SERVICE_PR_CREATION";
const CHANGE_SERVICE_NAME_PR_CREATION = "CHANGE_SERVICE_NAME_PR_CREATION";
const CHANGE_TARIFF_NAME_PR_CREATION = "CHANGE_TARIFF_NAME_PR_CREATION";


let startState = {
    directionsAndTariffs: [
        {
            nameDirection: 'Контекстная реклама',
            idDirection: 1,
            selected: false,
            paymentInFull: true,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Тариф Микро',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: false,
                    periodOfExecution: 3,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Тариф Старндарт',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    periodOfExecution: 5,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Тариф Максимум',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    periodOfExecution: 10,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Цели в Яндекс и Гугл',
                            selected: false,
                            idService: 3,
                            servicePrice: 100
                        }
                    ]
                }
            ]
        },
        {
            nameDirection: 'Реклама в соц.сетях',
            idDirection: 2,
            selected: false,
            paymentInFull: true,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Инстаграм',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'ВК',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Фейсбук',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        }
                    ]
                }
            ]
        },
        {
            nameDirection: 'Реклама Ютуб',
            idDirection: 3,
            selected: false,
            paymentInFull: true,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Баннерная реклама',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: true,
                    services: [
                        {
                            serviceName: 'Настройка рекламы на Ютубе',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            selected: false,
                            idService: 2,
                            servicePrice: 100
                        }
                    ]
                }
            ]
        }
    ]
};

const projectCreationReducer = (state = startState, action) => {
    switch (action.type) {
        case CHANGE_TARIFF_NAME_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateTariffs(state, indexDirection);
            newState.directionsAndTariffs[indexDirection]
                .tariffsNames[indexTariff]
                .name = action.tariffName;
            return newState
        }
        case CHANGE_SERVICE_NAME_PR_CREATION: {
            let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
            newState.directionsAndTariffs[indexDirection]
                .tariffsNames[indexTariff]
                .services[indexService]
                .serviceName = action.serviceName;
            return newState
        }
        case DELETE_SERVICE_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateTariffs(state, indexDirection);
            newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff] = {
                ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff],
                services: [
                    ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services
                        .filter(service => service.idService !== action.idService)
                ]
            };
            return newState
        }
        case ADD_NEW_SERVICE_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateTariffs(state, indexDirection);
            newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff] = {
                ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff],
                services: [
                    ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services,
                    action.newService
                ]
            };
            return newState
        }
        case ADD_NEW_TARIFF_PR_CREATION: {
            let indexDirection = Indexes.getIndexDirection(state, action);
            let newState = CopyState.getNewState(state);
            newState.directionsAndTariffs[indexDirection] = {
                ...state.directionsAndTariffs[indexDirection],
                tariffsNames: [
                    ...state.directionsAndTariffs[indexDirection].tariffsNames,
                    action.newTariff
                ]
            };
            return newState
        }
        case CHANGE_TARIFF_STATUS_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.getNewState(state);
            newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff] = {
                ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff],
                selected: action.status
            };
            console.log(newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff]);
            return newState
        }
        case CHANGE_DIRECTION_STATUS_PR_CREATION: {
            let newState = CopyState.getNewState(state);
            newState.directionsAndTariffs[action.index] = {
                ...newState.directionsAndTariffs[action.index],
                selected: action.status
            };
            return newState
        }
        default:
            return state
    }
};

let CopyState = {
    getNewState(state) {
        return {
            ...state,
            directionsAndTariffs: [
                ...state.directionsAndTariffs
            ]
        }
    },
    copyStateTariffs(state, indexDirection) {
        let newState = this.getNewState(state);
        newState.directionsAndTariffs[indexDirection] = {
            ...state.directionsAndTariffs[indexDirection],
            tariffsNames: [
                ...state.directionsAndTariffs[indexDirection].tariffsNames
            ]
        };
        return newState
    },
    copyStateServices(state, indexDirection, indexTariff) {
        let newState = this.copyStateTariffs(state, indexDirection);
        newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff] = {
            ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff],
            services: [
                ...state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services
            ]
        };
        return newState
    }
};

let Indexes = {
    getIndexes(state, action) {
        return {
            indexDirection: this.getIndexDirection(state, action),
            indexTariff: this.getIndexTariff(state, action),
            indexService: this.getIndexService(state, action)
        }
    },
    getIndexDirection(state, action) {
        return state.directionsAndTariffs
            .findIndex(e => e.idDirection === action.idDirection);
    },
    getIndexTariff(state, action) {
        let indexDirection = this.getIndexDirection(state, action);
        return state.directionsAndTariffs[indexDirection].tariffsNames
            .findIndex(e => e.id === action.idTariff);
    },
    getIndexService(state, action) {
        let indexDirection = this.getIndexDirection(state, action);
        let indexTariff = this.getIndexTariff(state, action);
        return state.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services
            .findIndex(s => s.idService === action.idService);
    }
};

// actionCreators
export let changeDirectionStatus = (status, index) => {
    return {type: CHANGE_DIRECTION_STATUS_PR_CREATION, status, index}
};

export let changeTariffStatus = (status, idTariff, idDirection) => {
    return {type: CHANGE_TARIFF_STATUS_PR_CREATION, status, idTariff, idDirection}
};

export let addTariff = (idDirection) => {
    let newTariff = {
        id: uuidv4(),
        name: 'Новый тариф',
        selected: true,
        packetPrice: 1500,
        paymentAPackageServices: true,
        periodOfExecution: 10,
        services: []
    };
    return {type: ADD_NEW_TARIFF_PR_CREATION, newTariff, idDirection}
};

export let addService = (idDirection, idTariff) => {
    let newService = {
        idService: uuidv4(),
        serviceName: 'Новая услуга',
        selected: true,
        servicePrice: 150
    };
    return {type: ADD_NEW_SERVICE_PR_CREATION, newService, idDirection, idTariff}
};

export let deleteService = (idDirection, idTariff, idService) => {
    return {type: DELETE_SERVICE_PR_CREATION, idDirection, idTariff, idService}
};

export let changeServiceName = (idNumbers, serviceName) => {
    let {idDirection, idTariff, idService} = idNumbers;
    return {type: CHANGE_SERVICE_NAME_PR_CREATION, idDirection, idTariff, idService, serviceName}
};

export let changeTariffName = (idNumbers, tariffName) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_NAME_PR_CREATION, idDirection, idTariff, tariffName}
};
// actionCreators

// thunkCreators
// thunkCreators

export default projectCreationReducer