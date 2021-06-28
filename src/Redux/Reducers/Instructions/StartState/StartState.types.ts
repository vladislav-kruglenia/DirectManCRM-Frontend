export type StartStateType =  {
    isSendMode: boolean,
    sendModeParams: SendModeParams,
}

export type SendModeParams = {
    instructionId: string,
    instructionText: string,
    destinations: DestinationType[],
}

export type DestinationType = {
    destinationId: string,
    destinationName: string,
}



