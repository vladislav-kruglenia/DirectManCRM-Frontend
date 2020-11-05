import {v4 as uuidv4} from 'uuid';

const CHANGE_DIRECTION_PROPERTY_PR_CREATION = "CHANGE_DIRECTION_PROPERTY_PR_CREATION";
const CHANGE_TARIFF_PROPERTY_PR_CREATION = "CHANGE_TARIFF_NAME_PR_CREATION";
const CHANGE_SERVICE_PROPERTY_PR_CREATION = "CHANGE_SERVICE_PROPERTY_PR_CREATION";
const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";
const ADD_NEW_SERVICE_PR_CREATION = "ADD_NEW_SERVICE_PR_CREATION";
const DELETE_SERVICE_PR_CREATION = "DELETE_SERVICE_PR_CREATION";
const CHANGE_NAME_PROJECT_PR_CREATION = "CHANGE_NAME_PROJECT_PR_CREATION";

let startState = {
    nameProject: "vk.com",
    clientContacts: [
        {
            id: 1,
            name: "Владислав",
            email: "32334309vlad@gmail.com",
            phoneNumber: "+375 29 381-75-00",
        },
        {
            id: 2,
            name: "Владислав",
            email: "32334309vlad@gmail.com",
            phoneNumber: "+375 29 381-75-00",
        },
        
    ],
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
        case CHANGE_NAME_PROJECT_PR_CREATION: {
            return {
                ...state,
                nameProject: action.propertyValue
            }
        }

        // Direction properties
        case CHANGE_DIRECTION_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "directions")
        }

        // Tariff properties
        case CHANGE_TARIFF_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "tariffs")
        }

        // Service properties
        case CHANGE_SERVICE_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "services")
        }

        // Adding new elements
        case ADD_NEW_TARIFF_PR_CREATION: {
            let indexDirection = Indexes.getIndexDirection(state, action);
            let newState = CopyState.copyStateTariffs(state, indexDirection);
            StateLayers.getTariffLayer(newState, indexDirection).push(action.newElement);
            return newState
        }
        case ADD_NEW_SERVICE_PR_CREATION: {
            let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
            let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
            StateLayers.getServiceLayer(newState, indexDirection, indexTariff).push(action.newElement);
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

// Объект создан для разгрузки кода изменения свойства на уровне направления, тарифа и услуги
let NewStateElementForChangeProperty = {
    // Отдает скопированное состояние в зависимости от выбранного ключа для изменения
    getNewState(state, action, elementStateKey) {
        let {newState, element} = this[elementStateKey](state, action);
        element[action.propertyName] = action.propertyValue;
        return newState
    },
    // Отдает объект Direction, который нужно изменить, и скопированный State
    directions(state, action) {
        let indexDirection = Indexes.getIndexDirection(state, action);
        let newState = CopyState.copyStateDirections(state);
        let element = StateLayers.getDirectionLayer(newState)[indexDirection];
        return {newState, element}
    },
    // Отдает объект Tariff, который нужно изменить, и скопированный State
    tariffs(state, action) {
        let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
        let newState = CopyState.copyStateTariffs(state, indexDirection);
        let element = StateLayers.getTariffLayer(newState, indexDirection)[indexTariff];
        return {newState, element}
    },
    // Отдает объект Service, который нужно изменить, и скопированный State
    services(state, action) {
        let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
        let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
        let element = StateLayers.getServiceLayer(newState, indexDirection, indexTariff)[indexService];
        return {newState, element}
    }
};

// Инкапсулирует пути до directions, tariffsNames и services
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

// Возвращает копии State на уровнях directions, tariffsNames и services
let CopyState = {
    copyStateDirections(state) {
        return {
            ...state,
            directionsAndTariffs: [
                ...StateLayers.getDirectionLayer(state)
            ]
        }
    },
    copyStateTariffs(state, indexDirection) {
        let newState = this.copyStateDirections(state);
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

// Отдает индексы directions, tariffsNames и services(ищет по id)
let Indexes = {
    // Удобно вызывать при использовании деструктуризации, когда нужно сразу несколько индексов
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

export let changeNameProject = (idNumbers = null, propertyValue) => {
    return {type: CHANGE_NAME_PROJECT_PR_CREATION, propertyValue}
};
// Direction properties
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
    let newElement = {
        id: uuidv4(),
        name: 'Новый тариф',
        selected: true,
        packetPrice: 1500,
        paymentAPackageServices: true,
        periodOfExecution: 10,
        services: []
    };
    return {type: ADD_NEW_TARIFF_PR_CREATION, newElement, idDirection}
};

export let addService = (idDirection, idTariff) => {
    let newElement = {
        idService: uuidv4(),
        serviceName: 'Новая услуга',
        selected: true,
        servicePrice: 150
    };
    return {type: ADD_NEW_SERVICE_PR_CREATION, newElement, idDirection, idTariff}
};

export let deleteService = (idNumbers) => {
    let {idDirection, idTariff, idService} = idNumbers;
    return {type: DELETE_SERVICE_PR_CREATION, idDirection, idTariff, idService}
};
// actionCreators ////////////////////

// thunkCreators
// thunkCreators

export default projectCreationReducer