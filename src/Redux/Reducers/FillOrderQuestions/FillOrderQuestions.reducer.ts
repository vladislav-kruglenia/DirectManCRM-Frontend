import {
    ActionCreatorsObjType,
    ResponseAccesses,
    ResponseContacts,
    ResponseLinks,
    ResponseText,
    StateType
} from "./Types/FillOrderQuestions.types";
import {ActionCreatorsType} from "./Types/Actions.types";
import produce, {Draft} from "immer";
import {v4 as uuidv4} from "uuid";

export const EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST = 'EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST';
export const EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST = 'EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST';
export const EDIT_RESPONSE_LINK_FILL_ORDER_QUEST = 'EDIT_RESPONSE_LINK_FILL_ORDER_QUEST';
export const EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST = 'EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST';
export const DELETE_RESPONSE_LINK_FILL_ORDER_QUEST = 'DELETE_RESPONSE_LINK_FILL_ORDER_QUEST';
export const DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST = 'DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST';
export const ADD_RESPONSE_LINK_FILL_ORDER_QUEST = 'ADD_RESPONSE_LINK_FILL_ORDER_QUEST';
export const ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST = 'ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST';


let startState: StateType = {
    briefType: null,
    questions: [
        {
            idQuestion: "89",
            question: "Ставить ли ограничение по времени и дням показа рекламы? Напишите нужные дни и время показа по Москве в 24-х часовом формате.",
            response: {
                responseType: "Text",
                data: {
                    isChanged: false,
                    textData: ""
                }
            }
        },
        {
            idQuestion: "4344",
            question: "Доступы к рекламе",
            response: {
                responseType: "Accesses",
                data: [
                    {
                        accessType: "direct",
                        login: "абракадабра",
                        password: "абракадабра"
                    },
                    {
                        accessType: "google",
                        login: "абракадабра",
                        password: "абракадабра"
                    },
                    {
                        accessType: "facebook",
                        login: "абракадабра",
                        password: "абракадабра"
                    },
                    {
                        accessType: "instagram",
                        login: "абракадабра",
                        password: "абракадабра"
                    },

                ]

            }
        },
        {
            idQuestion: "4343424",
            question: "Ссылки на продукты: ",
            response: {
                responseType: "Links",
                data: {
                    numberLinks: 10,
                    isNoData: false,
                    linksData: [
                        {
                            isChanged: true,
                            productLink: "https://vk.com/vlad_kruglenia",
                            productName: "Влад Кругленя"
                        },
                        {
                            isChanged: true,
                            productLink: "https://vk.com/34343434",
                            productName: "Влад "
                        },
                        {
                            isChanged: true,
                            productLink: "https://vk.com/34343434",
                            productName: "Влад2"
                        },
                    ]
                }
            }
        },
        {
            idQuestion: "43432323234",
            question: "Контакты клиента",
            response: {
                responseType: "Contacts",
                data: {
                    isNoData: false,
                    contactsData: [
                        {
                            idClient: "323232",
                            name: "Влад",
                            phoneNumber: "+375293817500",
                            email: "32334309vlad@gmail.com"
                        }
                    ]
                }
            }
        },
    ]
};

export let fillOrderQuestionsReducer = (state: StateType = startState, action: ActionCreatorsType): StateType =>
    produce(state, (draft: Draft<StateType>) => {
        switch (action.type) {
            case EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Text") {
                    response = response as ResponseText;
                    response.data.isChanged = true;
                    response.data.textData = action.response;
                }
                break
            }
            case EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Accesses") {
                    response = response as ResponseAccesses;
                    response.data[action.indexAccess] = action.accessData
                }
                break
            }
            case EDIT_RESPONSE_LINK_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Links") {
                    response = response as ResponseLinks;
                    response.data.linksData[action.indexLink] = action.linkData
                }
                break
            }
            case EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Contacts") {
                    response = response as ResponseContacts;
                    response.data.contactsData[action.indexContact] = action.contactData
                }
                break
            }
            case DELETE_RESPONSE_LINK_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Links") {
                    response = response as ResponseLinks;
                    response.data.linksData.splice(action.indexLink, 1);
                    response.data.isNoData = response.data.linksData.length === 0
                }
                break
            }
            case DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Contacts") {
                    response = response as ResponseContacts;
                    response.data.contactsData.splice(action.indexContact, 1);
                    response.data.isNoData = response.data.contactsData.length === 0
                }
                break
            }
            case ADD_RESPONSE_LINK_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Links") {
                    response = response as ResponseLinks;
                    response.data.linksData = [...response.data.linksData, action.linkData];
                    response.data.isNoData = response.data.isNoData ? false : false
                }
                break
            }
            case ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST: {
                let response = draft.questions[action.indexQuestion].response;
                if (response.responseType === "Contacts") {
                    response = response as ResponseContacts;
                    response.data.contactsData = [...response.data.contactsData, action.contactData];
                    response.data.isNoData = response.data.isNoData ? false : false
                }
                break
            }

        }
    });

export let actionCreators: ActionCreatorsObjType = {
    editResponseText: (indexQuestion, textResponse) => {
        return {
            type: EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST,
            indexQuestion: indexQuestion,
            response: textResponse
        }
    },
    editResponseAccess: (indexQuestion, indexAccess, accessData) => {
        return {
            type: EDIT_RESPONSE_ACCESS_FILL_ORDER_QUEST,
            indexQuestion, indexAccess, accessData
        }

    },
    editResponseLink: (indexQuestion, indexLink, linkData) => {
        return {
            type: EDIT_RESPONSE_LINK_FILL_ORDER_QUEST,
            indexQuestion, indexLink, linkData
        }
    },
    editResponseContact: (indexQuestion, indexContact, contactData) => {
    debugger
        return {
            type: EDIT_RESPONSE_CONTACT_FILL_ORDER_QUEST,
            indexQuestion, indexContact, contactData
        }
    },
    deleteResponseLink: (indexQuestion, indexLink) => {
        return {
            type: DELETE_RESPONSE_LINK_FILL_ORDER_QUEST,
            indexQuestion, indexLink
        }
    },
    deleteResponseContact: (indexQuestion, indexContact) => {
        return {
            type: DELETE_RESPONSE_CONTACT_FILL_ORDER_QUEST,
            indexQuestion, indexContact
        }
    },
    addResponseLink: (indexQuestion) => {
        return {
            type: ADD_RESPONSE_LINK_FILL_ORDER_QUEST,
            linkData: {
                isChanged: false,
                productLink: '',
                productName: ''
            },
            indexQuestion,
        }
    },
    addResponseContact: (indexQuestion) => {
        return {
            type: ADD_RESPONSE_CONTACT_FILL_ORDER_QUEST,
            contactData: {
                email: null,
                phoneNumber: null,
                name: null,
                idClient: uuidv4(),
            },
            indexQuestion,
        }
    },
};






