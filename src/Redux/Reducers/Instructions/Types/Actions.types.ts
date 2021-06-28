export type EditSendModeParamsPayload = {
    instructionId?: string,
    instructionText?: string,
    destinationsId?: string[],
}

export type DeleteDestinationPayload = {
    index: number,
}
