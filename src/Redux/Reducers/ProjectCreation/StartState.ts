import {startStateProjectCreationType} from "./Types/ProjectCreation.types";

export const startState: startStateProjectCreationType = {
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