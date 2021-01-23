import {ActionCreatorsObjType, StateType} from "./Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";
import {ActionCreatorsType} from "./Types/FillOrderQuestions/ActionCreators";
import produce, {Draft} from "immer";

export const EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST = 'EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST';

let startState: StateType = {
    briefType: null,
    questions: [
        {
            idQuestion: "6",
            question: "Услуги/товары, которые надо прорекламировать (в тарифе Микро 1 услуга/товар)?",
            response: ""
        },
        {
            idQuestion: "7",
            question: "ССЫЛКИ НА СТРАНИЦЫ, КУДА БУДЕТ ВЕСТИ РЕКЛАМА по каждой услуге/товару:",
            response: ""
        },
        {
            idQuestion: "89",
            question: "Ставить ли ограничение по времени и дням показа рекламы? Напишите нужные дни и время показа по Москве в 24-х часовом формате.",
            response: ""
        },
        {
            idQuestion: "5698",
            question: "На какие города или области давать рекламу? (если не вся область, то пишите конкретные районы и города в ней, а не «ближайшее подмосковье» или «юго-запад Москвы» …)",
            response: ""
        },
        {
            idQuestion: "5584",
            question: "Какое ставить ограничение по бюджету на рекламу? Сколько руб в день на один поисковик?",
            response: ""
        },
        {
            idQuestion: "56",
            question: "Для настройки некоторых услуг (таких как подменные заголовки на сайте, цели, счетчики, генератор заявок, антискликивание) просьба указать доступы для редактирования сайта в формате:",
            response: ""
        },
        {
            idQuestion: "588525",
            question: "Доступы к счетчикам Яндекс Метрики и Гугл Аналитикс:",
            response: ""
        },
        {
            idQuestion: "54685854",
            question: "Какое ставить ограничение по бюджету на рекламу? Сколько руб в день на один поисковик?",
            response: ""
        },
        {
            idQuestion: "88554",
            question: "Контакты человека, с которым можно будет общаться по проекту (имя, email, телефон, мессенджеры в которых будет удобно созваниваться и вести переписку):",
            response: ""
        },

    ]
};

export let fillOrderQuestionsReducer = (state: StateType = startState, action: ActionCreatorsType): StateType =>
    produce(state, (draft: Draft<StateType>) => {
        switch (action.type) {
            case EDIT_RESPONSE_TEXT_FILL_ORDER_QUEST: {
                draft.questions[action.indexQuestion].response = action.response;
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

};






