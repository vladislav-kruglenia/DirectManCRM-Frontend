import {EditResponseTextAC} from "./ActionCreators";

export type StateType = {
    briefType: 'contextAdvertising' | 'socialNetworksAdvertising' | "youtubeAdvertising" | null,
    questions: Array<QuestionAndResponse>
}

export type QuestionAndResponse = {
    idQuestion: string,
    question: string,
    response: string
}

export type ActionCreatorsObjType = {
    editResponseText: EditResponseTextType
}

export type EditResponseTextType = (indexQuestion: number, textResponse: string) => EditResponseTextAC