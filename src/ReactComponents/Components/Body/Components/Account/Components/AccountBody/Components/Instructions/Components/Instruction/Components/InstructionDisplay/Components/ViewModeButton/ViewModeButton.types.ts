export type ViewModeButtonProps = {
    viewMode: boolean,
    editViewMode: (value: boolean) => void,
}

export enum ViewModeButtonText {
    OpenMode = "Свернуть",
    ClosedMode = "Развернуть",
}
