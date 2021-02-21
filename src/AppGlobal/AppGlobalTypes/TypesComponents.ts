export enum ProjectCreationEnum {
    prCreation = "projectCreation",
    editTariffsData = "editTariffsData"
}

export enum DisplayAccessesEnum {
    direct = 'direct',
    google = 'google',
    instagram = 'instagram',
    facebook = 'facebook'
}

export type OrderQuestionResponseTypes = "Text" | "Accesses" | "Links"| "Contacts" | "None"

export type DisplayAccesses = 'direct' | 'google' | 'instagram' | 'facebook'

export type ContactContainerComponentType = "ProjectCreation" | "FillOrderQuestion"