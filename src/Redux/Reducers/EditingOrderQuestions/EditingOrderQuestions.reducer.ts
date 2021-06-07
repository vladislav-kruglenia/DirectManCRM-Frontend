import {
    Access,
    AssessesTypeResponse,
    ContactsTypeResponse,
    LinksTypeResponse,
    NoneTypeResponse,
    QuestionType,
    StateType,
    TextTypeResponse
} from "./Types/EditingOrderQuestions.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    AddAccessTypePayload,
    DeleteAccessType,
    DeleteQuestionPayload,
    EditAccessTypePayload, EditBriefNamePayload,
    EditNameAndLinkAccessPayload,
    EditNumberLinksPayload,
    EditQuestionTextPayload,
    EditResponseTypePayload
} from "./Types/Actions.types";
import {v4 as uuidv4} from "uuid";
import {OrderQuestionResponseTypes} from "../../../AppGlobal/AppGlobalTypes/TypesComponents";

export let startState: StateType = {
    briefId: "1",
    briefName: "Бриф по настройке контекста",
    assessesTypes: [
        {
            idAccess: "yandex",
            accessName: "Яндекс Директ",
            accessLink: "https://direct.yandex.ru/",
            isChanged: true,
            isNewAccess: false,
        },
        {
            idAccess: "google",
            accessName: "Гугл реклама",
            accessLink: "https://www.google.ru/adwords/",
            isChanged: true,
            isNewAccess: false,
        },
        {
            idAccess: "instagram",
            accessName: "Инстаграм",
            accessLink: "https://instagram.com/accounts/login/",
            isChanged: true,
            isNewAccess: false,
        },
        {
            idAccess: "facebook",
            accessName: "Фейсбук",
            accessLink: "https://ru-ru.facebook.com/login/",
            isChanged: true,
            isNewAccess: false,
        },
        {
            idAccess: "otherSite",
            accessName: "Указать сайт",
            accessLink: "",
            isChanged: false,
            isNewAccess: false,
        },

    ],
    questions: [
        {
            idQuestion: "65216161",
            questionTextData: {
                isChangedQuestionText: true,
                questionText: "Ссылки на рекламу",
            },
            response: {
                type: "Links",
                numberLinks: 10
            }
        },
        {
            idQuestion: "4848484",
            questionTextData: {
                isChangedQuestionText: true,
                questionText: "Доступы к рекламным аккаунтам",
            },
            response: {
                type: "Accesses",
                assesses: [
                    {
                        idAccess: "facebook",
                        accessName: "Фейсбук",
                        accessLink: "https://ru-ru.facebook.com/login/",
                        isChanged: true
                    }
                ]
            }
        },

        {
            idQuestion: "98497616",
            questionTextData: {
                isChangedQuestionText: true,
                questionText: "Контакты человека, с которым можно будет общаться по проекту",
            },
            response: {
                type: "Contacts",
            }
        },
        {
            idQuestion: "4542424124",
            questionTextData: {
                isChangedQuestionText: true,
                questionText: "Регионы в которых будем показывать рекламу",
            },
            response: {
                type: "Text"
            }
        }
    ]
};

let editingOrderQuestionsReducer = createSlice({
    name: "editingOrderQuestionsReducer",
    initialState: startState,
    reducers: {
        editBriefName(state, action: PayloadAction<EditBriefNamePayload>){
            state.briefName = action.payload.briefName
        },

        editQuestionText(state, action: PayloadAction<EditQuestionTextPayload>) {
            let {questionTextData, indexQuestion} = action.payload;
            state.questions[indexQuestion].questionTextData = questionTextData
        },
        editResponseType(state, action: PayloadAction<EditResponseTypePayload>) {
            state.questions[action.payload.indexQuestion].response = getResponseObject(action.payload.responseType);
        },
        editNumberLinks(state, action: PayloadAction<EditNumberLinksPayload>) {
            if (state.questions[action.payload.indexQuestion].response.type === "Links") {
                let response = state.questions[action.payload.indexQuestion].response as LinksTypeResponse;
                response.numberLinks = action.payload.numberLinks
            }
        },
        editAccessType(state, action: PayloadAction<EditAccessTypePayload>) {
            if (state.questions[action.payload.indexQuestion].response.type === "Accesses") {
                let response = state.questions[action.payload.indexQuestion].response as AssessesTypeResponse;
                response.assesses[action.payload.indexAccess] = getAccessTypeObject(action.payload.idAccess, state.assessesTypes)
            }
        },
        editNameAndLinkAccess(state, action: PayloadAction<EditNameAndLinkAccessPayload>) {
            if (state.questions[action.payload.indexQuestion].response.type === "Accesses") {
                let {idAccess, accessName, accessLink, indexAccess, indexQuestion} = action.payload;
                let indexAccessTemplate = getIndexAccess(idAccess, state.assessesTypes);
                let response = state.questions[indexQuestion].response as AssessesTypeResponse;
                let isOtherSite = idAccess === "otherSite";
                let accessObject = {
                    idAccess: isOtherSite ? uuidv4() : idAccess,
                    accessName: accessName,
                    accessLink: accessLink,
                    isChanged: true,
                    isNewAccess: true
                };

                // Ecли редактируем тип otherSite, то в массив с типами доступов закидывается новый шаблон
                // Если редактировался ранее, то изменяем шаблон
                if(isOtherSite || indexAccessTemplate === -1) {
                    state.assessesTypes = [...state.assessesTypes, accessObject];
                    response.assesses[indexAccess] = accessObject
                } else if (indexAccessTemplate > -1 && state.assessesTypes[indexAccessTemplate].isNewAccess) {
                    state.assessesTypes[indexAccessTemplate] = accessObject;
                    response.assesses[indexAccess] = accessObject
                }
                // В любом случае потом изменяем текущее состояние в объекте ответа

            }
        },
        addAccessType(state, action: PayloadAction<AddAccessTypePayload>) {
            if (state.questions[action.payload.indexQuestion].response.type === "Accesses") {
                let response = state.questions[action.payload.indexQuestion].response as AssessesTypeResponse;
                let newAccess: Access = {
                    idAccess: "otherSite",
                    accessLink: "",
                    accessName: "",
                    isChanged:  true

                };
                response.assesses = [...response.assesses, newAccess]
            }
        },
        addQuestion(state) {
            let newQuestion: QuestionType = {
                idQuestion: uuidv4(),
                questionTextData: {
                    questionText: "",
                    isChangedQuestionText: false,
                },
                response: {
                    type: "None"
                }
            };
            state.questions = [...state.questions, newQuestion]
        },
        deleteQuestion(state, action: PayloadAction<DeleteQuestionPayload>) {
            state.questions.splice(action.payload.indexQuestion, 1)
        },
        deleteAccess(state, action: PayloadAction<DeleteAccessType>) {
            let {indexQuestion, indexAccess} = action.payload;
            if (state.questions[indexQuestion].response.type === "Accesses") {
                let response = state.questions[indexQuestion].response as AssessesTypeResponse;
                response.assesses.splice(indexAccess, 1)
            }
        }
    }
});


let getResponseObject = (responseType: OrderQuestionResponseTypes) => {
    switch (responseType) {
        case "Accesses":
            let response: AssessesTypeResponse = {
                type: "Accesses",
                assesses: []
            };
            return response;
        case "Contacts": {
            let response: ContactsTypeResponse = {
                type: "Contacts"
            };
            return response
        }
        case "Links": {
            let response: LinksTypeResponse = {
                type: "Links",
                numberLinks: 10
            };
            return response
        }
        case "Text": {
            let response: TextTypeResponse = {
                type: "Text",
            };
            return response
        }
        case "None": {
            let response: NoneTypeResponse = {
                type: "None",
            };
            return response
        }

    }
};

let getAccessTypeObject = (idAccess: string, accessesTypes: Array<Access>) => {
    let response: Access = accessesTypes.find(access => access.idAccess === idAccess) || {
        idAccess:"otherSite", accessName:"", accessLink:"", isChanged: false
    };
    return response
};

let getIndexAccess = (idAccess: string, accessesTypes: Array<Access>) => {
    return accessesTypes.findIndex(access => access.idAccess === idAccess)
};


export const {
    editBriefName,
    editQuestionText,
    deleteQuestion,
    addQuestion,
    editResponseType,
    editNumberLinks,
    editAccessType,
    editNameAndLinkAccess,
    addAccessType,
    deleteAccess,
} = editingOrderQuestionsReducer.actions;

export default editingOrderQuestionsReducer.reducer
