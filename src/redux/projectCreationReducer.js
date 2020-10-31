import {v4 as uuidv4} from 'uuid';

const CHANGE_DIRECTION_PROPERTY_PR_CREATION = "CHANGE_DIRECTION_PROPERTY_PR_CREATION";
const CHANGE_TARIFF_PROPERTY_PR_CREATION = "CHANGE_TARIFF_NAME_PR_CREATION";
const CHANGE_SERVICE_PROPERTY_PR_CREATION = "CHANGE_SERVICE_PROPERTY_PR_CREATION";
const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";
const ADD_NEW_SERVICE_PR_CREATION = "ADD_NEW_SERVICE_PR_CREATION";
const DELETE_SERVICE_PR_CREATION = "DELETE_SERVICE_PR_CREATION";

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
                    periodOfExecution: 5,
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
                    periodOfExecution: 5,
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
                    periodOfExecution: 5,
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
                    periodOfExecution: 5,
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
        // Direction properties
        case CHANGE_DIRECTION_PROPERTY_PR_CREATION: {
            return NewStateElement.getNewState(state, action, "directions")
        }

        // Tariff properties
        case CHANGE_TARIFF_PROPERTY_PR_CREATION: {
            return NewStateElement.getNewState(state, action, "tariffs")
        }

        // Service properties
        case CHANGE_SERVICE_PROPERTY_PR_CREATION: {
            return NewStateElement.getNewState(state, action, "services")
        }

        // Adding new elements
        case ADD_NEW_TARIFF_PR_CREATION: {
            let indexDirection = Indexes.getIndexDirection(state, action);
            let newState = CopyState.copyStateTariffs(state, indexDirection);
            StateLayers.getTariffLayer(newState, indexDirection).push(action.newTariff);
            return newState
        }
        case ADD_NEW_SERVICE_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
            StateLayers.getServiceLayer(newState, indexDirection, indexTariff).push(action.newService);
            return newState
        }
        case DELETE_SERVICE_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
            newState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services = [
                ...StateLayers.getServiceLayer(state, indexDirection, indexTariff)
                    .filter(service => service.idService !== action.idService)
            ];
            return newState
        }

        default:
            return state
    }
};

let NewStateElement = {
    getNewState(state, action, elementStateKey) {
        let {newState, element} = this[elementStateKey](state, action);
        element[action.propertyName] = action.propertyValue;
        return newState
    },
    directions(state, action) {
        let indexDirection = Indexes.getIndexDirection(state, action);
        let newState = CopyState.getNewState(state);
        let element = StateLayers.getDirectionLayer(newState)[indexDirection];
        return {newState, element}
    },
    tariffs(state, action) {
        let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
        let newState = CopyState.copyStateTariffs(state, indexDirection);
        let element = StateLayers.getTariffLayer(newState, indexDirection)[indexTariff];
        return {newState, element}
    },
    services(state, action) {
        let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
        let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
        let element = StateLayers.getServiceLayer(newState, indexDirection, indexTariff)[indexService];
        return {newState, element}
    }
};

let StateLayers = {
    getDirectionLayer(currentState) {
        return currentState.directionsAndTariffs
    },
    getTariffLayer(currentState, indexDirection) {
        return currentState.directionsAndTariffs[indexDirection].tariffsNames
    },
    getServiceLayer(currentState, indexDirection, indexTariff) {
        return currentState.directionsAndTariffs[indexDirection].tariffsNames[indexTariff].services
    },
};

let CopyState = {
    getNewState(state) {
        return {
            ...state,
            directionsAndTariffs: [
                ...StateLayers.getDirectionLayer(state)
            ]
        }
    },
    copyStateTariffs(state, indexDirection) {
        let newState = this.getNewState(state);
        StateLayers.getDirectionLayer(newState)[indexDirection] = {
            ...StateLayers.getDirectionLayer(state)[indexDirection],
            tariffsNames: [
                ...StateLayers.getTariffLayer(state, indexDirection)
            ]
        };
        return newState
    },
    copyStateServices(state, indexDirection, indexTariff) {
        let newState = this.copyStateTariffs(state, indexDirection);
        StateLayers.getTariffLayer(newState, indexDirection)[indexTariff] = {
            ...StateLayers.getTariffLayer(state, indexDirection)[indexTariff],
            services: [
                ...StateLayers.getServiceLayer(state, indexDirection, indexTariff)
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

// actionCreators ////////////////////
export let changeDirectionStatus = (propertyValue, idDirection) => {
    return {type: CHANGE_DIRECTION_PROPERTY_PR_CREATION, propertyName: "selected", idDirection, propertyValue}
};

export let changePaymentInFull = (idDirection, propertyValue) => {
    return {type: CHANGE_DIRECTION_PROPERTY_PR_CREATION, propertyName: "paymentInFull", idDirection, propertyValue}
};

// Tariff properties
export let changeTariffStatus = (propertyValue, idTariff, idDirection) => {
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "selected", propertyValue, idTariff, idDirection}
};

export let changePaymentPackage = (propertyValue, idTariff, idDirection) => {
    return {
        type: CHANGE_TARIFF_PROPERTY_PR_CREATION,
        propertyName: "paymentAPackageServices",
        propertyValue,
        idTariff,
        idDirection
    }
};

export let changeTariffName = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "name", idDirection, idTariff, propertyValue}
};

export let changePacketPrice = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "packetPrice", idDirection, idTariff, propertyValue}
};

export let changeDeadlineTariff = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {
        type: CHANGE_TARIFF_PROPERTY_PR_CREATION,
        propertyName: "periodOfExecution",
        idDirection,
        idTariff,
        propertyValue
    }
};

// Service properties
export let changeServiceName = (idNumbers, propertyValue) => {
    let {idDirection, idTariff, idService} = idNumbers;
    return {
        type: CHANGE_SERVICE_PROPERTY_PR_CREATION,
        propertyName: "serviceName",
        idDirection,
        idTariff,
        idService,
        propertyValue
    }
};

export let changeServicePrice = (idNumbers, propertyValue) => {
    let {idDirection, idTariff, idService} = idNumbers;
    return {
        type: CHANGE_SERVICE_PROPERTY_PR_CREATION,
        propertyName: "servicePrice",
        idDirection,
        idTariff,
        idService,
        propertyValue
    }
};

// Adding new elements
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
// actionCreators ////////////////////

// thunkCreators
// thunkCreators

export default projectCreationReducer