export type BriefNameProps = {
    briefName: string
}
export type DisplayBriefNameProps = {
    briefName: string
    openEditMode: () => void
}

export type BriefNameFormProps = {
    briefName: string
    exitEditMode: () => void
    editBriefName: EditBriefNameType
}

export type EditProps = {
    openEditMode: () => void
}

export type EditBriefNameType = (briefName: string) => void
