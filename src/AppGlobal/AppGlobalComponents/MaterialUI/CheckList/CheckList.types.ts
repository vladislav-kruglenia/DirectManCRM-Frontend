export type CheckListProps = {
    checklistItems: ChecklistItem[],
}

export type ChecklistItem = {
    isReady: boolean,
    itemName: string,
}