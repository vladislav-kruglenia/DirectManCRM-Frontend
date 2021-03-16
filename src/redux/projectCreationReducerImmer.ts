import {v4 as uuidv4} from 'uuid';
import {projectCreationAPI} from "../RestAPI/api";
import {
    addContactType,
    addingTariffsDataType,
    addServiceType,
    addTariffType,
    changeClientDataType,
    changeDeadlineTariffType,
    changeDirectionStatusType,
    changeNameProjectType,
    changePacketPriceType,
    changePaymentInFullType,
    changePaymentPackageType,
    changeServiceInfoType,
    changeServiceNameType,
    changeServicePriceType,
    changeTariffNameType,
    changeTariffStatusType,
    deleteContactType,
    deleteServiceType,
    deleteTariffsDataType,
    deleteTariffType,
    editTariffsInfoType,
    getTariffsInfoType,
    IndexesType,
    saveOrderInfoType,
    startStateProjectCreationType
} from "./Types/ProjectCreation/ProjectCreationReducerTypes";
import {ServicesType, TariffsType} from "../RestAPI/Types/ApiTypes";
import {ActionCreatorsType} from "./Types/ProjectCreation/ActionCreators";
import produce, {Draft} from "immer";

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
export const CHANGE_DIRECTION_STATUS_PR_CREATION = "CHANGE_DIRECTION_STATUS_PR_CREATION";
export const CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION = "CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION";
export const CHANGE_TARIFF_STATUS_PR_CREATION = "CHANGE_TARIFF_STATUS_PR_CREATION";
export const CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION = "CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION";
export const CHANGE_TARIFF_NAME_PR_CREATION = "CHANGE_TARIFF_NAME_PR_CREATION";
export const CHANGE_TARIFF_PACKET_PRICE_PR_CREATION = "CHANGE_TARIFF_PACKET_PRICE_PR_CREATION";
export const CHANGE_TARIFF_DEADLINE_PR_CREATION = "CHANGE_TARIFF_DEADLINE_PR_CREATION";
export const CHANGE_SERVICE_NAME_PR_CREATION = "CHANGE_SERVICE_NAME_PR_CREATION";
export const CHANGE_SERVICE_PRICE_PR_CREATION = "CHANGE_SERVICE_PRICE_PR_CREATION";


let startState: startStateProjectCreationType = {
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

const projectCreationReducer = (state: startStateProjectCreationType = startState, action: ActionCreatorsType): startStateProjectCreationType =>
    produce(state, (draft: Draft<startStateProjectCreationType>) => {
        switch (action.type) {
            // Client contacts
            case CHANGE_CLIENT_DATA_PR_CREATION: {
                let indexClient = Indexes.getIndexClientContacts(state, action);
                draft.clientContacts[indexClient] = action.newClientData;
                break
            }

            case ADD_NEW_CONTACT_PR_CREATION: {
                draft.clientContacts = [...draft.clientContacts, action.newElement];
                break
            }

            case DELETE_CONTACT_PR_CREATION: {
                let indexClient = Indexes.getIndexClientContacts(state, action);
                draft.clientContacts.splice(indexClient, 1);
                break
            }

            case CHANGE_NAME_PROJECT_PR_CREATION: {
                draft.nameProject = action.propertyValue;
                break;
            }



            // Direction properties

            case CHANGE_DIRECTION_STATUS_PR_CREATION: {
                let indexDirection = Indexes.getIndexDirection(state, action);
                draft.directionsAndTariffs[indexDirection].selected = action.propertyValue;
                break
            }

            case CHANGE_DIRECTION_PAYMENT_IN_FULL_PR_CREATION: {
                let indexDirection = Indexes.getIndexDirection(state, action);
                draft.directionsAndTariffs[indexDirection].paymentInFull = action.propertyValue;
                break
            }



            // Tariff properties

            case CHANGE_TARIFF_STATUS_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].tariffStatus = action.propertyValue;
                break
            }

            case CHANGE_TARIFF_PAYMENT_PACKAGE_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].paymentPackage = action.propertyValue;
                break
            }

            case CHANGE_TARIFF_NAME_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].tariffName = action.tariffName;
                break
            }

            case CHANGE_TARIFF_PACKET_PRICE_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].packetPrice = action.propertyValue;
                break
            }

            case CHANGE_TARIFF_DEADLINE_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].deadline = action.propertyValue;
                break
            }

            // Service properties
            case CHANGE_SERVICE_NAME_PR_CREATION: {
                let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff]
                    .services[indexService].serviceName = action.propertyValue;
                break
            }

            case CHANGE_SERVICE_PRICE_PR_CREATION: {
                let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
                draft
                    .directionsAndTariffs[indexDirection]
                    .namesTariffs[indexTariff]
                    .services[indexService].servicePrice = action.propertyValue;
                break
            }



            // Adding new elements
            case ADDING_TARIFFS_DATA_PR_CREATION: {
                draft = {
                    ...draft,
                    directionsAndTariffs: action.data,
                    dataLoaded: true,
                    userId: uuidv4()
                };
                break
            }

            case DELETE_TARIFFS_DATA_PR_CREATION: {
                draft = {
                    ...draft,
                    directionsAndTariffs: [],
                    dataLoaded: false,
                    userId: null
                };
                break
            }

            case ADD_NEW_TARIFF_PR_CREATION: {
                let indexDirection = Indexes.getIndexDirection(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs = [
                    ...draft.directionsAndTariffs[indexDirection].namesTariffs,
                    action.newElement
                ];
                break
            }

            case ADD_NEW_SERVICE_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services = [
                    ...draft.directionsAndTariffs[indexDirection].namesTariffs[indexTariff].services,
                    action.newElement
                ];
                break
            }

            case DELETE_SERVICE_PR_CREATION: {
                let {indexDirection, indexTariff, indexService} = Indexes.getIndexes(state, action);
                draft
                    .directionsAndTariffs[indexDirection]
                    .namesTariffs[indexTariff]
                    .services.splice(indexService, 1);
                break
            }

            case TARIFF_DELETE_PR_CREATION: {
                let {indexDirection, indexTariff} = Indexes.getIndexes(state, action);
                draft.directionsAndTariffs[indexDirection].namesTariffs.splice(indexTariff, 1);
                break
            }
        }
    });


// Отдает индексы directions, tariffsNames и services(ищет по id)
    let Indexes: IndexesType = {
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
    };

// actionCreators ////////////////////

//Client Contacts
    export let changeClientData: changeClientDataType = (newClientData) => {
        let {idClient} = newClientData;
        return {type: CHANGE_CLIENT_DATA_PR_CREATION, idClient, newClientData}
    };

    export let addContact: addContactType = () => {
        let newElement/*: ClientContactType*/ = {
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
        return {
            type: CHANGE_TARIFF_NAME_PR_CREATION,
            propertyName: "tariffName",
            idDirection,
            idTariff,
            tariffName: propertyValue
        }
    };

    export let changePacketPrice: changePacketPriceType = (idNumbers, propertyValue) => {
        let {idDirection, idTariff} = idNumbers;
        return {
            type: CHANGE_TARIFF_PACKET_PRICE_PR_CREATION,
            propertyName: "packetPrice",
            idDirection,
            idTariff,
            propertyValue
        }
    };

    export let changeDeadlineTariff: changeDeadlineTariffType = (idNumbers, propertyValue) => {
        let {idDirection, idTariff} = idNumbers;
        return {
            type: CHANGE_TARIFF_DEADLINE_PR_CREATION,
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
            type: CHANGE_SERVICE_NAME_PR_CREATION,
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
            type: CHANGE_SERVICE_PRICE_PR_CREATION,
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
    };
// thunkCreators

    export default projectCreationReducer;