export type ClearTabButtonProps = {
    isOtherTabs: boolean,
    indexTab: number,
    projectsArrayLength: number,
    currentProjectIndex: number,
    onDeleteTab: () => void,
    updateCurrentProjectIndex: (value: number) => void,
}