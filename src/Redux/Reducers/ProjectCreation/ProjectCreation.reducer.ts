import {v4 as uuidv4} from 'uuid';
import {StateType} from "./Types/ProjectCreation.types";
import {ActionCreatorsType} from "./Types/ActionCreators.types";


export const CHANGE_DIRECTION_PROPERTY_PR_CREATION = "CHANGE_DIRECTION_PROPERTY_PR_CREATION";
export const CHANGE_TARIFF_PROPERTY_PR_CREATION = "CHANGE_TARIFF_PROPERTY_PR_CREATION";
export const CHANGE_SERVICE_PROPERTY_PR_CREATION = "CHANGE_SERVICE_PROPERTY_PR_CREATION";
export const ADD_NEW_TARIFF_PR_CREATION = "ADD_NEW_TARIFF_PR_CREATION";
export const ADD_NEW_SERVICE_PR_CREATION = "ADD_NEW_SERVICE_PR_CREATION";
export const DELETE_SERVICE_PR_CREATION = "DELETE_SERVICE_PR_CREATION";
export const CHANGE_NAME_PROJECT_PR_CREATION = "CHANGE_NAME_PROJECT_PR_CREATION";
export const CHANGE_CLIENT_DATA_PR_CREATION = "CHANGE_CLIENT_DATA_PR_CREATION";
export const ADD_NEW_CONTACT_PR_CREATION = "ADD_NEW_CONTACT_PR_CREATION";
export const DELETE_CONTACT_PR_CREATION = "DELETE_CONTACT_PR_CREATION";
export const ADDING_TARIFFS_DATA_PR_CREATION = "ADDING_TARIFFS_DATA_PR_CREATION";
export const DELETE_TARIFFS_DATA_PR_CREATION = "DELETE_TARIFFS_DATA_PR_CREATION";
export const TARIFF_DELETE_PR_CREATION = "TARIFF_DELETE_PR_CREATION";


let startState: StateType = {
    userId: "1",
    dataLoaded: true,
    nameProject: 'Название проекта не выбрано',
    clientContacts: [
        {
            idClient: "1",
            name: "Владислав",
            email: "32334309vlad@gmail.com",
            phoneNumber: "+375 29 381-75-00",
        },
    ],
    directionsAndTariffs: [
        {
            nameDirection: 'Контекстная реклама',
            idDirection: "1",
            selected: true,
            paymentInFull: true,
            namesTariffs: [
                {
                    tariffId: "1",
                    tariffName: 'Тариф Микро',
                    tariffStatus: true,
                    packetPrice: 1000,
                    paymentPackage: false,
                    deadline: 3,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: "2",
                    tariffName: 'Тариф Старндарт',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: "3",
                    tariffName: 'Тариф Максимум',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 10,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Гугл Поиск',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Цели в Яндекс и Гугл',
                            serviceStatus: false,
                            serviceId: "3",
                            servicePrice: 100
                        }
                    ]
                }
            ]
        },
        {
            nameDirection: 'Реклама в соц.сетях',
            idDirection: "2",
            selected: false,
            paymentInFull: true,
            namesTariffs: [
                {
                    tariffId: "1",
                    tariffName: 'Инстаграм',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: "2",
                    tariffName: 'ВК',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        }
                    ]
                },
                {
                    tariffId: "3",
                    tariffName: 'Фейсбук',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка таргет рекламы',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        }
                    ]
                }
            ]
        },
        {
            nameDirection: 'Реклама Ютуб',
            idDirection: "3",
            selected: false,
            paymentInFull: true,
            namesTariffs: [
                {
                    tariffId: "1",
                    tariffName: 'Баннерная реклама',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: true,
                    deadline: 5,
                    services: [
                        {
                            serviceName: 'Настройка рекламы на Ютубе',
                            serviceStatus: false,
                            serviceId: "1",
                            servicePrice: 100
                        },
                        {
                            serviceName: 'Ведение 5 раб. дней',
                            serviceStatus: false,
                            serviceId: "2",
                            servicePrice: 100
                        }
                    ]
                }
            ]
        }
    ]
};

const projectCreationReducer = (state: StateType = startState, action: ActionCreatorsType): StateType => {
    switch (action.type) {
        // Client contacts
        /*case CHANGE_CLIENT_DATA_PR_CREATION: {
            return NewStateForContacts.changeClientData(state, action);
        }*/
        /*case ADD_NEW_CONTACT_PR_CREATION: {
            return NewStateForContacts.addNewContact(state, action);
        }*/
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
        /*case CHANGE_DIRECTION_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "directions")
        }*/

        // Tariff properties
        /*case CHANGE_TARIFF_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "tariffs")
        }

        // Service properties
        case CHANGE_SERVICE_PROPERTY_PR_CREATION: {
            return NewStateElementForChangeProperty.getNewState(state, action, "services")
        }*/

        // Adding new elements
        case ADDING_TARIFFS_DATA_PR_CREATION: {
            return {
                ...state,
                directionsAndTariffs: action.data,
                dataLoaded: true,
                userId: uuidv4()
            }
        }
        case DELETE_TARIFFS_DATA_PR_CREATION: {
            return {
                ...state,
                directionsAndTariffs: [],
                dataLoaded: false,
                userId: null
            }
        }

        /*case ADD_NEW_TARIFF_PR_CREATION: {
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
                    .filter((service: ServicesType) => service.serviceId !== action.idService)
            ];
            return newState
        }

        case TARIFF_DELETE_PR_CREATION: {
            let indexDirection = Indexes.getIndexDirection(state, action);

            let newState = CopyState.copyStateTariffs(state, indexDirection);
            newState.directionsAndTariffs[indexDirection].namesTariffs = [
                ...state.directionsAndTariffs[indexDirection].namesTariffs
                    .filter((tariff) => tariff.tariffId !== action.idTariff)
            ];
                    //.filter((tariff) => tariff.tariffId !== action.idTariff);

            console.log(newState);
            debugger
            return newState
        }*/
        default:
            return state
    }
};

/*let NewStateForContacts = {
    changeClientData(state: StateType, action: ChangeClientDataAC) {
        let newState = CopyState.copyStateClientContacts(state);
        let indexClient = Indexes.getIndexClientContacts(state, action);
        newState.clientContacts[indexClient] = action.newClientData;
        return newState
    },
    addNewContact(state: StateType, action: AddContactAC) {
        let newState = CopyState.copyStateClientContacts(state);
        StateLayers.getClientContactsLayer(newState).push(action.newElement);
        return newState
    }
};*/


// Объект создан для разгрузки кода изменения свойства на уровне направления, тарифа и услуги
/*
export let NewStateElementForChangeProperty: NewStateElementType = {
    // Отдает скопированное состояние в зависимости от выбранного ключа для изменения
    getNewState(state, action, elementStateKey) {
        // @ts-ignore Todo: ts-ignore
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
        let element = StateLayers.getTariffLayer(newState, indexDirection)[indexTariff] as any;
        element[action.propertyName] = action.propertyValue;
        return {newState, element}
    },
    // Отдает объект Service, который нужно изменить, и скопированный State
    services(state, action) {
        let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
        let newState = CopyState.copyStateServices(state, indexDirection, indexTariff);
        let element = StateLayers.getServiceLayer(newState, indexDirection, indexTariff)[indexService] as any;
        element[action.propertyName] = action.propertyValue;
        return {newState, element}
    }
};
*/

// Инкапсулирует пути до directions, namesTariffs и services
/*let StateLayers: StateLayersType = {
    getClientContactsLayer: (currentState) => {
        return currentState.clientContacts
    },
    getDirectionLayer: (currentState) => {
        return currentState.directionsAndTariffs
    },
    getTariffLayer: (currentState, indexDirection) => {
        return currentState.directionsAndTariffs[indexDirection].namesTariffs
    },
    getServiceLayer: (currentState, indexDirection, indexTariff) => {
        return currentState.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services
    },
};*/

// Возвращает копии State на уровнях directions, tariffsNames, services, clientContacts
/*let CopyState: CopyStateType = {
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
};*/

// Отдает индексы directions, tariffsNames и services(ищет по id)
/*let Indexes: IndexesType = {
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
            .findIndex((s: ServicesType) => s.serviceId === action.idService);
    }
};*/

// actionCreators ////////////////////

//Client Contacts
/*export let changeClientData: changeClientDataType = (newClientData) => {
    let {idClient} = newClientData;
    return {type: CHANGE_CLIENT_DATA_PR_CREATION, idClient, newClientData}
};

export let addContact: addContactType = () => {
    let newElement/!*: ClientContactType*!/ = {
        idClient: uuidv4(),
        name: null,
        email: null,
        phoneNumber: null,
    };
    return {type: ADD_NEW_CONTACT_PR_CREATION, newElement}
};

export let deleteContact: deleteContactType = (idClient) => {
    return {type: DELETE_CONTACT_PR_CREATION, idClient}
};

export let changeNameProject: changeNameProjectType = (idNumbers = null, propertyValue) => {
    return {type: CHANGE_NAME_PROJECT_PR_CREATION, propertyValue}
};

// Direction properties
export let changeDirectionStatus: changeDirectionStatusType = (propertyValue, idDirection) => {
    return {type: CHANGE_DIRECTION_STATUS_PR_CREATION, propertyName: "selected", idDirection, propertyValue}
};

export let changePaymentInFull: changePaymentInFullType = (idDirection, propertyValue) => {
    return {type: CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION, propertyName: "paymentInFull", idDirection, propertyValue}
};

// Tariff properties
export let changeTariffStatus: changeTariffStatusType = (propertyValue, idTariff, idDirection) => {
    return {
        type: CHANGE_TARIFF_STATUS_PR_CREATION,
        propertyName: "tariffStatus",
        propertyValue,
        idTariff,
        idDirection
    }
};

export let changePaymentPackage: changePaymentPackageType = (propertyValue, idTariff, idDirection) => {
    return {
        type: CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION,
        propertyName: "paymentPackage",
        propertyValue,
        idTariff,
        idDirection
    }
};

export let changeTariffName: changeTariffNameType = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    propertyValue = propertyValue === '' ? 'Название не указано' : propertyValue;
    return {type: CHANGE_TARIFF_NAME_PR_CREATION, propertyName: "tariffName", idDirection, idTariff, propertyValue}
};

export let changePacketPrice: changePacketPriceType = (idNumbers, propertyValue) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: CHANGE_TARIFF_PROPERTY_PR_CREATION, propertyName: "packetPrice", idDirection, idTariff, propertyValue}
};

export let changeDeadlineTariff: changeDeadlineTariffType = (idNumbers, propertyValue) => {
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
export let changeServiceName: changeServiceNameType = (idNumbers, propertyValue) => {
    let {idDirection, idTariff, idService} = idNumbers;
    propertyValue = propertyValue === '' ? 'Название не указано' : propertyValue;
    return {
        type: CHANGE_SERVICE_PROPERTY_PR_CREATION,
        propertyName: "serviceName",
        idDirection,
        idTariff,
        idService,
        propertyValue
    }
};

export let changeServicePrice: changeServicePriceType = (idNumbers, propertyValue) => {
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
export let addingTariffsData: addingTariffsDataType = (data) => {
    return {type: ADDING_TARIFFS_DATA_PR_CREATION, data}
};

export let deleteTariffsData: deleteTariffsDataType = () => {
    return {type: DELETE_TARIFFS_DATA_PR_CREATION}
};

export let addTariff: addTariffType = (idDirection) => {
    let newElement: TariffsType = {
        tariffId: uuidv4(),
        tariffName: "",
        tariffStatus: true,
        packetPrice: 1500,
        paymentPackage: true,
        deadline: 10,
        services: []
    };
    return {type: ADD_NEW_TARIFF_PR_CREATION, newElement, idDirection}
};

export let addService: addServiceType = (idDirection, idTariff) => {
    let newElement: ServicesType = {
        serviceId: uuidv4(),
        serviceName: "",
        serviceStatus: true,
        servicePrice: 150
    };
    return {type: ADD_NEW_SERVICE_PR_CREATION, newElement, idDirection, idTariff}
};

export let deleteService: deleteServiceType = (idNumbers) => {
    let {idDirection, idTariff, idService} = idNumbers;
    return {type: DELETE_SERVICE_PR_CREATION, idDirection, idTariff, idService}
};

export let deleteTariff: deleteTariffType = (idNumbers) => {
    let {idDirection, idTariff} = idNumbers;
    return {type: TARIFF_DELETE_PR_CREATION, idDirection, idTariff}
};
// actionCreators ////////////////////

// thunkCreators

export let editTariffsInfoThunkCreator: editTariffsInfoType = (directionsAndTariffs) => async (dispatch) => {
    if (directionsAndTariffs !== null) {
        let response = await projectCreationAPI.editTariffsInfo({directionsAndTariffs});
        if (response.status === 202) {
            dispatch(deleteTariffsData());
            console.log(response.data.message);
        }
    } else {
        console.log('Error(editTariffsInfoThunkCreator): directionsAndTariffs === null!')
    }

};

export let getTariffsInfoThunkCreator: getTariffsInfoType = () => async (dispatch) => {
    let response = await projectCreationAPI.getTariffsInfo();
    if (response.status === 202) {
        dispatch(addingTariffsData(response.data.tariffsInfo))
    }
};

export let saveOrderInfoThunkCreator: saveOrderInfoType = (orderData, nameProject, userId) =>
    async (dispatch) => {
        let response = await projectCreationAPI.saveOrderInfo({
            userId,
            nameProject,
            directionsAndTariffs: orderData
        });
        if (response.status === 202) {
            dispatch(deleteTariffsData());
            console.log(orderData);
            console.log(response.data.message)
        }
    };

export let changeServiceInfo: changeServiceInfoType = (idNumbers, serviceData) => async (dispatch) => {
    let {serviceName, servicePrice} = serviceData;
    serviceName = serviceName === null ? '' : serviceName;
    dispatch(changeServiceName(idNumbers, serviceName));
    dispatch(changeServicePrice(idNumbers, servicePrice))
};*/
// thunkCreators

export default projectCreationReducer