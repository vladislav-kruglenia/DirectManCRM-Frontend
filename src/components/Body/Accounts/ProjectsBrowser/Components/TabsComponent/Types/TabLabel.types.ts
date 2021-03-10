export type TabLabelProps = {
    projectsArrayLength: number,
    indexTab: number,
    projectName: string | null,
    onDeleteTab: () => void,
    isOtherTabs: boolean,
    currentProjectIndex: number,
    updateCurrentProjectIndex: (value: number) => void,
}