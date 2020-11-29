import {v4 as uuidv4} from 'uuid';

const CHANGE_DIRECTION_PROPERTY_PR_CREATION = "CHANGE_DIRECTION_PROPERTY_PR_CREATION";
const CHANGE_TARIFF_PROPERTY_PR_CREATION = "CHANGE_TARIFF_NAME_PR_CREATION";
const CHANGE_SERVICE_PROPERTY_PR_CREATION = "CHANGE_SERVICE_PROPERTY_PR_CREATION";
const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";
const ADD_NEW_SERVICE_PR_CREATION = "ADD_NEW_SERVICE_PR_CREATION";
const DELETE_SERVICE_PR_CREATION = "DELETE_SERVICE_PR_CREATION";
const CHANGE_NAME_PROJECT_PR_CREATION = "CHANGE_NAME_PROJECT_PR_CREATION";
const CHANGE_CLIENT_DATA_PR_CREATION = "CHANGE_CLIENT_DATA_PR_CREATION";
const ADD_NEW_CONTACT_PR_CREATION = "ADD_NEW_CONTACT_PR_CREATION";
const DELETE_CONTACT_PR_CREATION = "DELETE_CONTACT_PR_CREATION";

/*directionsAndTariffs: [
    {
        nameDirection: {type: String, default: ""},
        idDirection: {type: Number, default: -1},
        paymentInFull: {type: Boolean, default: true},
        directionTotalPrice: {type: Number, default: -1},
        namesTariffs: [
            {
                tariffId: {type: Number, default: -1},
                tariffName: {type: String, default: ""},
                tariffStatus: {type: Boolean, default: false},
                packetPrice: {type: Number, default: -1},
                paymentPackage: {type: Boolean, default: true},
                deadline: {type: Number, default: -1},
                totalPrice: {type: Number, default: -1},
                services: [
                    {
                        serviceName: {type: String, default: ""},
                        serviceStatus: {type: Boolean, default: false},
                        serviceId: {type: Number, default: -1},
                        servicePrice: {type: Number, default: -1}
                    }
                ]
            }
        ]
    }
]*/

let startState = {
    nameProject: "vk.com",
    clientContacts: [
       /*
       {
            idClient: 1,
            name: "Владислав",
            email: "32334309vlad@gmail.com",
            phoneNumber: "+375 29 381-75-00",
        },
        */
    ],
    directionsAndTariffs: [
        {
            nameDirection: 'Контекстная реклама',
            idDirection: 1,
            selected: false,
            paymentInFull: true,
            namesTariffs: [
                {
                    tariffId: 1,
                    tariffName: 'Тариф Микро',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: false,
                    deadline: 3,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: 2,
                    tariffName: 'Тариф Старндарт',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            serviceStatus: false,
                            serviceId: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: 3,
                    tariffName: 'Тариф Максимум',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 10,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            serviceStatus: false,
                            serviceId: 2,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Цели в Яндекс и Гугл',
                            serviceStatus: false,
                            serviceId: 3,
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
            namesTariffs: [
                {
                    tariffId: 1,
                    tariffName: 'Инстаграм',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: 2,
                    tariffName: 'ВК',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: 2,
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: 3,
                    tariffName: 'Фейсбук',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: 2,
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
            namesTariffs: [
                {
                    tariffId: 1,
                    tariffName: 'Баннерная реклама',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка рекламы на Ютубе',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: 2,
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
        // Client contacts
        case CHANGE_CLIENT_DATA_PR_CREATION: {
            return NewStateForContacts.changeClientData(state, action);
        }
        case ADD_NEW_CONTACT_PR_CREATION: {
            return NewStateForContacts.addNewContact(state, action);
        }
        case DELETE_CONTACT_PR_CREATION: {
            return {
                ...state,
                clientContacts: [
                    ...state.clientContacts.filter(client => client.idClient !== action.idClient)
                ]
            };
        }
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
            newState.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services = [
                ...StateLayers.getServiceLayer(state, indexDirection, indexTariff)
                    .filter(service => service.serviceId !== action.idService)
            ];
            return newState
        }
        default:
            return state
    }
};

let NewStateForContacts = {
    changeClientData(state, action) {
        let newState = CopyState.copyStateClientContacts(state);
        let indexClient = Indexes.getIndexClientContacts(state, action);
        newState.clientContacts[indexClient] = action.newClientData;
        return newState
    },
    addNewContact(state, action) {
        let newState = CopyState.copyStateClientContacts(state);
        StateLayers.getClientContactsLayer(newState).push(action.newElement);
        return newState
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

// Инкапсулирует пути до directions, namesTariffs и services
let StateLayers = {
    getClientContactsLayer(currentState) {
        return currentState.clientContacts
    },
    getDirectionLayer(currentState) {
        return currentState.directionsAndTariffs
    },
    getTariffLayer(currentState, indexDirection) {
        return currentState.directionsAndTariffs[indexDirection].namesTariffs
    },
    getServiceLayer(currentState, indexDirection, indexTariff) {
        return currentState.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services
    },
};

// Возвращает копии State на уровнях directions, tariffsNames, services, clientContacts
let CopyState = {
    copyStateClientContacts(state) {
        return {
            ...state,
            clientContacts: [
                ...StateLayers.getClientContactsLayer(state)
            ]
        }
    },
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
            namesTariffs: [
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
    getIndexClientContacts(state, action) {
        return state.clientContacts
            .findIndex(e => e.idClient === action.idClient);
    },
    getIndexDirection(state, action) {
        return state.directionsAndTariffs
            .findIndex(e => e.idDirection === action.idDirection);
    },
    getIndexTariff(state, action) {
        let indexDirection = this.getIndexDirection(state, action);
        return state.directionsAndTariffs[indexDirection].namesTariffs
            .findIndex(e => e.tariffId === action.idTariff);
    },
    getIndexService(state, action) {
        let indexDirection = this.getIndexDirection(state, action);
        let indexTariff = this.getIndexTariff(state, action);
        return state.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services
            .findIndex(s => s.serviceId === action.idService);
    }
};

// actionCreators ////////////////////

//Client Contacts
export let changeClientData = (newClientData) => {
    let {idClient} = newClientData;
    return {type: CHANGE_CLIENT_DATA_PR_CREATION, idClient, newClientData}
};

export let addContact = () => {
    let newElement = {
        idClient: uuidv4(),
        name: null,
        email: null,
        phoneNumber: null,
    };
    return {type: ADD_NEW_CONTACT_PR_CREATION, newElement}
};

export let deleteContact = (idClient) => {
    return {type: DELETE_CONTACT_PR_CREATION, idClient}
};

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
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "tariffStatus", propertyValue, idTariff, idDirection}
};

export let changePaymentPackage = (propertyValue, idTariff, idDirection) => {
    return {
        type: CHANGE_TARIFF_PROPERTY_PR_CREATION,
        propertyName: "paymentPackage",
        propertyValue,
        idTariff,
        idDirection
    }
};

export let changeTariffName = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "tariffName", idDirection, idTariff, propertyValue}
};

export let changePacketPrice = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "packetPrice", idDirection, idTariff, propertyValue}
};

export let changeDeadlineTariff = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {
        type: CHANGE_TARIFF_PROPERTY_PR_CREATION,
        propertyName: "deadline",
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
        tariffId: uuidv4(),
        tariffName: 'Новый тариф',
        tariffStatus: true,
        packetPrice: 1500,
        paymentPackage: true,
        deadline: 10,
        services: []
    };
    return {type: ADD_NEW_TARIFF_PR_CREATION, newElement, idDirection}
};

export let addService = (idDirection, idTariff) => {
    let newElement = {
        serviceId: uuidv4(),
        serviceName: 'Новая услуга',
        serviceStatus: true,
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